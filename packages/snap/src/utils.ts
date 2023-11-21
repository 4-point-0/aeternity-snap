import { encode as bs58Encode } from "bs58";
import { encode as varuintEncode } from "varuint-bitcoin";
import nacl from "tweetnacl";
import { Buffer } from "buffer/";
import { blake2b } from "blakejs";
import { buildTx } from "./tx/builder";
import { Tag } from "./tx/builder/constants";
import { getBufferToSign } from "./account/Memory";
import { Encoded, decode, addChecksum } from "./utils/encoder";
import { ArgumentError } from "./utils/errors";
import { concatBuffers } from "./utils/other";

export const bytesToHex = (bytes: any) => {
  return `0x${[...bytes].map((b) => b.toString(16).padStart(2, "0")).join("")}`;
};

export const hexToBytes = (hex: any) => {
  const strippedHex = hex.startsWith("0x") ? hex.slice(2) : hex;
  const bytes = [];
  for (let i = 0; i < strippedHex.length; i += 2) {
    bytes.push(parseInt(strippedHex.substr(i, 2), 16));
  }
  return Uint8Array.from(bytes);
};

export const encodePublicKey = (value: any) =>
  `ak_${bs58Encode(addChecksum(value))}`;

export const hash = (input: any) => {
  return Buffer.from(blake2b(input, undefined, 32));
};

export const messageToHash = (message: any) => {
  const p = Buffer.from("aeternity Signed Message:\n", "utf8");
  const msg = Buffer.from(message, "utf8");
  return hash(
    concatBuffers([varuintEncode(p.length), p, varuintEncode(msg.length), msg]),
  );
};

export const sign = (data: Uint8Array, privateKey: Uint8Array): Uint8Array => {
  return nacl.sign.detached(Buffer.from(data), Buffer.from(privateKey));
};

export const signMessage = (message: any, privateKey: any) => {
  return sign(messageToHash(message), privateKey);
};

export const verify = (data: any, signature: any, address: any) => {
  return nacl.sign.detached.verify(data, signature, decode(address));
};

export const verifyMessage = (message: any, signature: any, address: any) => {
  return verify(messageToHash(message), signature, address);
};

const messagePrefix = Buffer.from("aeternity Signed Message:\n", "utf8");
export const messagePrefixLength = varuintEncode(messagePrefix.length);

export const signTransaction = (
  transaction: Encoded.Transaction,
  {
    innerTx,
    networkId,
    ...options
  }: { innerTx?: boolean; networkId?: string } = {},
): Encoded.Transaction => {
  if (networkId === null) {
    throw new ArgumentError("networkId", "provided", networkId);
  }
  const rlpBinaryTx = decode(transaction);
  const txWithNetworkId = getBufferToSign(
    transaction,
    innerTx === true,
    networkId,
  );

  const signatures = [sign(txWithNetworkId, (options as any).privateKey)];
  return buildTx({ tag: Tag.SignedTx, encodedTx: rlpBinaryTx, signatures });
};

export const assertIsValidLength = (data: any) => {
  const reqLen = 32;
  if (data.length !== reqLen) {
    throw {
      code: -32000,
      message: "Invalid public key length.",
    };
  }
};

export const assertInput = (path: any) => {
  if (!path) {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertAllStrings = (input: any) => {
  if (
    !Array.isArray(input) ||
    !input.every((item) => typeof item === "string")
  ) {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertIsArray = (input: any) => {
  if (!Array.isArray(input)) {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertIsString = (input: any) => {
  if (typeof input !== "string") {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertIsBoolean = (input: any) => {
  if (typeof input !== "boolean") {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertConfirmation = (confirmed: any) => {
  if (!confirmed) {
    throw {
      code: 4001,
      message: "User rejected the request.",
    };
  }
};

export const assertIsVerifiedMessage = (verified: any) => {
  if (!verified) {
    throw {
      code: -32000,
      message: "Not verified message.",
    };
  }
};
