import base64js from "base64-js";
import { deriveKeyPair } from "./privateKey";
import {
  assertInput,
  assertConfirmation,
  assertIsString,
  assertIsBoolean,
  encodePublicKey,
  signMessage,
  verifyMessage,
  assertIsVerifiedMessage,
  signTransaction,
} from "./utils";
import { renderGetPublicKey, renderSignMessage } from "./ui";

module.exports.onRpcRequest = async ({ origin, request }: any) => {
  const dappOrigin = request?.params?.origin || origin;
  const dappHost = new URL(dappOrigin)?.host;

  switch (request.method) {
    case "getPublicKey": {
      const { derivationPath, confirm = false } = request.params || {};

      assertIsBoolean(confirm);

      const keyPair = await deriveKeyPair(derivationPath);
      const pubkey = encodePublicKey(keyPair.publicKey);

      if (confirm) {
        const accepted = await renderGetPublicKey(
          dappHost,
          "Are you sure you want to get account address?"
        );
        assertConfirmation(accepted);
      }

      return pubkey;
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
      const isVerified = verifyMessage(decodedMessage, signed, publicKey);

      assertIsVerifiedMessage(isVerified);

      return {
        publicKey: publicKey,
        signature: base64js.fromByteArray(signed),
      };
    }

    case "signTransaction": {
      const { derivationPath, tx, networkId, isInnerTx } = request.params || {};

      const keyPair = await deriveKeyPair(derivationPath);
      const options = { privateKey: keyPair.secretKey };
      const signedTx = signTransaction(tx, {
        innerTx: isInnerTx,
        networkId: networkId,
        ...options,
      });

      return {
        publicKey: encodePublicKey(keyPair.publicKey),
        signedTx: signedTx,
      };
    }

    default:
      throw {
        code: 4200,
        message: "The requested method is not supported.",
      };
  }
};
