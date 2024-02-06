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
  assertIsBoolean,
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
      const { derivationPath, confirm = false } = request.params || {};

      assertIsBoolean(confirm);

      const keyPair = await deriveKeyPair(derivationPath);
      const publicKey = encodePublicKey(keyPair.publicKey);

      if (confirm) {
        const accepted = await renderGetPublicKey(
          dappHost,
          "Are you sure you want to get account address?",
        );
        assertConfirmation(accepted);
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
        assertConfirmation(
          renderSignContractTx(
            dappHost,
            await getContractCallDetails(unpackedTx.encodedTx, networkId),
          ),
        );
      } else if (unpackedTx.tag === 12) {
        assertConfirmation(
          renderSpendTx(dappHost, await getSpendTxDetails(unpackedTx)),
        );
      } else {
        assertConfirmation(renderSignTx(dappHost, tx));
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
