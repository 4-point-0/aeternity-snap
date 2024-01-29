import { addChecksum } from "./encoder";

const base64 = {
  encode: (buffer: Uint8Array) => addChecksum(buffer).toString("base64"),
  decode: (string: string) => getPayload(Buffer.from(string, "base64")),
};

const base58 = {
  encode: (buffer: Uint8Array) => bs58Encode(addChecksum(buffer)),
  decode: (string: string) => getPayload(Buffer.from(bs58Decode(string))),
};
