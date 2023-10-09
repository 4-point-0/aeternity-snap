var Buffer = require("buffer/").Buffer;
import { blake2b } from "blakejs/blake2b.js";
import { encode as bs58Encode } from "bs58";
import { decode, concatBuffers, addChecksum } from "./encoder";
import { encode as varuintEncode } from "varuint-bitcoin";
import nacl from "tweetnacl";

export const bytesToHex = (bytes) => {
  return `0x${[...bytes].map((b) => b.toString(16).padStart(2, "0")).join("")}`;
};

export const hexToBytes = (hex) => {
  const strippedHex = hex.startsWith("0x") ? hex.slice(2) : hex;
  const bytes = [];
  for (let i = 0; i < strippedHex.length; i += 2) {
    bytes.push(parseInt(strippedHex.substr(i, 2), 16));
  }
  return Uint8Array.from(bytes);
};

export const encodePublicKey = (value) => {
  return "ak_" + bs58Encode(addChecksum(value));
};

export function hash(input) {
  return Buffer.from(blake2b(input, undefined, 32));
}

export const messageToHash = (message) => {
  const p = Buffer.from("aeternity Signed Message:\n", "utf8");
  const msg = Buffer.from(message, "utf8");
  return hash(
    concatBuffers([varuintEncode(p.length), p, varuintEncode(msg.length), msg])
  );
};

export const sign = (data, privateKey) => {
  return nacl.sign.detached(Buffer.from(data), Buffer.from(privateKey));
};

export const signMessage = (message, privateKey) => {
  return sign(messageToHash(message), privateKey);
};

export const verify = (data, signature, address) => {
  return nacl.sign.detached.verify(data, signature, decode(address));
};

export const verifyMessage = (message, signature, address) => {
  return verify(messageToHash(message), signature, address);
};

export const assertIsValidLength = (data) => {
  const reqLen = 32;
  if (data.length !== reqLen) {
    throw {
      code: -32000,
      message: "Invalid public key length.",
    };
  }
};

export const assertInput = (path) => {
  if (!path) {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertAllStrings = (input) => {
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

export const assertIsArray = (input) => {
  if (!Array.isArray(input)) {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertIsString = (input) => {
  if (typeof input !== "string") {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertIsBoolean = (input) => {
  if (typeof input !== "boolean") {
    throw {
      code: -32000,
      message: "Invalid input.",
    };
  }
};

export const assertConfirmation = (confirmed) => {
  if (!confirmed) {
    throw {
      code: 4001,
      message: "User rejected the request.",
    };
  }
};

export const assertIsVerifiedMessage = (verified) => {
  if (!verified) {
    throw {
      code: -32000,
      message: "Not verified message.",
    };
  }
};
