import Sha256 from "sha.js/sha256.js";
import { encode as bs58Encode, decode as bs58Decode } from "bs58";
var Buffer = require("buffer/").Buffer;

export let Encoding;
(function (Encoding) {
  Encoding["KeyBlockHash"] = "kh";
  Encoding["MicroBlockHash"] = "mh";
  Encoding["BlockPofHash"] = "bf";
  Encoding["BlockTxHash"] = "bx";
  Encoding["BlockStateHash"] = "bs";
  Encoding["Channel"] = "ch";
  Encoding["ContractAddress"] = "ct";
  Encoding["ContractBytearray"] = "cb";
  Encoding["ContractStoreKey"] = "ck";
  Encoding["ContractStoreValue"] = "cv";
  Encoding["Transaction"] = "tx";
  Encoding["TxHash"] = "th";
  Encoding["OracleAddress"] = "ok";
  Encoding["OracleQuery"] = "ov";
  Encoding["OracleQueryId"] = "oq";
  Encoding["OracleResponse"] = "or";
  Encoding["AccountAddress"] = "ak";
  Encoding["Signature"] = "sg";
  Encoding["Commitment"] = "cm";
  Encoding["PeerPubkey"] = "pp";
  Encoding["Name"] = "nm";
  Encoding["State"] = "st";
  Encoding["Poi"] = "pi";
  Encoding["StateTrees"] = "ss";
  Encoding["CallStateTree"] = "cs";
  Encoding["Bytearray"] = "ba";
})(Encoding || (Encoding = {}));

export const base64Types = [
  Encoding.ContractBytearray,
  Encoding.ContractStoreKey,
  Encoding.ContractStoreValue,
  Encoding.Transaction,
  Encoding.OracleQuery,
  Encoding.OracleResponse,
  Encoding.State,
  Encoding.Poi,
  Encoding.StateTrees,
  Encoding.CallStateTree,
  Encoding.Bytearray,
];

export const base58Types = [
  Encoding.KeyBlockHash,
  Encoding.MicroBlockHash,
  Encoding.BlockPofHash,
  Encoding.BlockTxHash,
  Encoding.BlockStateHash,
  Encoding.Channel,
  Encoding.ContractAddress,
  Encoding.TxHash,
  Encoding.OracleAddress,
  Encoding.OracleQueryId,
  Encoding.AccountAddress,
  Encoding.Signature,
  Encoding.Commitment,
  Encoding.PeerPubkey,
  Encoding.Name,
];

const byteSizeForType = {
  [Encoding.KeyBlockHash]: 32,
  [Encoding.MicroBlockHash]: 32,
  [Encoding.BlockPofHash]: 32,
  [Encoding.BlockTxHash]: 32,
  [Encoding.BlockStateHash]: 32,
  [Encoding.Channel]: 32,
  [Encoding.ContractAddress]: 32,
  [Encoding.TxHash]: 32,
  [Encoding.OracleAddress]: 32,
  [Encoding.OracleQueryId]: 32,
  [Encoding.AccountAddress]: 32,
  [Encoding.Signature]: 64,
  [Encoding.Commitment]: 32,
  [Encoding.PeerPubkey]: 32,
  [Encoding.State]: 32,
};

const isWebpack4Buffer = (() => {
  try {
    Buffer.concat([Uint8Array.from([])]);
    return false;
  } catch (error) {
    return true;
  }
})();

export const concatBuffers = isWebpack4Buffer
  ? (list, totalLength) =>
      Buffer.concat(
        list.map((el) => Buffer.from(el)),
        totalLength
      )
  : Buffer.concat;

export const sha256hash = (input) => {
  return new Sha256().update(input).digest();
};

export const getChecksum = (payload) =>
  sha256hash(sha256hash(payload)).slice(0, 4);

export const addChecksum = (payload) =>
  concatBuffers([payload, getChecksum(payload)]);

export const isKeyOfObject = (key, object) => {
  return key in object;
};

export const ensureValidLength = (data, type) => {
  if (!isKeyOfObject(type, byteSizeForType)) return;
  const reqLen = byteSizeForType[type];
  if (reqLen == null || data.length === reqLen) return;
  throw new Error(
    `Payload should be ${reqLen} bytes, got ${data.length} instead`
  );
};

const getPayload = (buffer) => {
  const payload = buffer.slice(0, -4);
  if (!getChecksum(payload).equals(buffer.slice(-4))) throw new Error();
  return payload;
};

const base64 = {
  encode: (buffer) => addChecksum(buffer).toString("base64"),
  decode: (string) => getPayload(Buffer.from(string, "base64")),
};
const base58 = {
  encode: (buffer) => bs58Encode(addChecksum(buffer)),
  decode: (string) => getPayload(Buffer.from(bs58Decode(string))),
};

const parseType = (maybeType) => {
  const base64Type = base64Types.find((t) => t === maybeType);
  if (base64Type != null) return [base64Type, base64];
  const base58Type = base58Types.find((t) => t === maybeType);
  if (base58Type != null) return [base58Type, base58];
  throw new Error(
    "prefix",
    `one of ${[...base58Types, ...base64Types].join(", ")}`,
    maybeType
  );
};

export const decode = (data) => {
  const [prefix, encodedPayload, extra] = data.split("_");
  if (encodedPayload == null)
    throw new Error(`Encoded string missing payload: ${data}`);
  if (extra != null)
    throw new Error(`Encoded string have extra parts: ${data}`);
  const [type, encoder] = parseType(prefix);
  const payload = encoder.decode(encodedPayload);
  ensureValidLength(payload, type);
  return payload;
};

export const encode = (data, type) => {
  const [, encoder] = parseType(type);
  ensureValidLength(data, type);
  return `${type}_${encoder.encode(data)}`;
};
