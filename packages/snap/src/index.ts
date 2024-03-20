import base64js from "base64-js";
import { deriveKeyPair } from "./privateKey";
import {
  renderGetPublicKey,
  renderSignMessage,
  renderSignContractTx,
  renderSpendTx,
  renderSignTx,
} from "./ui";
import {
  assertConfirmation,
  assertInput,
  assertIsString,
  assertIsVerifiedMessage,
  encodePublicKey,
  signMessage,
  signTransaction,
} from "./utils";
import { verifyMessage } from "./utils/crypto";
import { unpackTx } from "./tx/builder";
import { getContractCallDetails, getSpendTxDetails } from "./contract/helper";

module.exports.onRpcRequest = async ({ origin, request }: any) => {
  if (!origin) {
    throw new Error("Invalid origin");
  }

  const dappHost = new URL(origin)?.host;

  switch (request.method) {
    case "getPublicKey": {
      const { derivationPath } = request.params || {};

      const keyPair = await deriveKeyPair(derivationPath);
      const publicKey = encodePublicKey(keyPair.publicKey);

      const accepted = await renderGetPublicKey(
        dappHost,
        "Are you sure you want to get account address?",
      );
      assertConfirmation(accepted);

      if (!accepted) {
        return null;
      }

      return { publicKey };
    }

    case "signMessage": {
      const { derivationPath, message } = request.params || {};
      assertInput(message);
      assertIsString(message);

      const keyPair = await deriveKeyPair(derivationPath);

      const messageBytes = base64js.toByteArray(message);
      let decodedMessage = "";
      try {
        decodedMessage = new TextDecoder().decode(messageBytes);
      } catch (error) {
        decodedMessage = "Unable to decode message";
      }

      const accepted = await renderSignMessage(dappHost, decodedMessage);
      assertConfirmation(accepted);

      const signed = signMessage(decodedMessage, keyPair.secretKey);
      const publicKey = encodePublicKey(keyPair.publicKey);
      const isVerified = verifyMessage(
        decodedMessage,
        signed,
        publicKey as any,
      );
      assertIsVerifiedMessage(isVerified);

      return {
        publicKey,
        signature: base64js.fromByteArray(signed),
      };
    }

    case "signTransaction": {
      const { derivationPath, tx, networkId, isInnerTx } = request.params || {};

      const unpackedTx = unpackTx(tx);

      if (
        unpackedTx.tag === 11 &&
        unpackedTx.encodedTx &&
        (unpackedTx.encodedTx.tag === 42 || unpackedTx.encodedTx.tag === 43)
      ) {
        const details = await getContractCallDetails(
          unpackedTx.encodedTx,
          networkId,
        );
        const confirmed = await renderSignContractTx(dappHost, details);
        assertConfirmation(confirmed);
        if (!confirmed) {
          return null;
        }
      } else if (unpackedTx.tag === 12) {
        const details = await getSpendTxDetails(unpackedTx);
        const confirmed = await renderSpendTx(dappHost, details);
        assertConfirmation(confirmed);
        if (!confirmed) {
          return null;
        }
      } else {
        const confirmed = await renderSignTx(dappHost, tx);
        assertConfirmation(confirmed);

        if (!confirmed) {
          return null;
        }
      }
      const keyPair = await deriveKeyPair(derivationPath);
      const options = { privateKey: keyPair.secretKey };
      const signedTx = signTransaction(tx, {
        innerTx: isInnerTx,
        networkId,
        ...options,
      });

      return {
        publicKey: encodePublicKey(keyPair.publicKey),
        signedTx,
      };
    }

    default:
      throw {
        code: 4200,
        message: "The requested method is not supported.",
      };
  }
};
