import { panel, heading, text, copyable, divider } from "@metamask/snaps-ui";
import { encode as bs58Encode, decode as bs58Decode } from "bs58";
import Sha256 from "sha.js";
import { ArgumentError, DecodeError, PayloadLengthError } from "./utils/errors";

export enum Encoding {
  KeyBlockHash = "kh",
  MicroBlockHash = "mh",
  BlockPofHash = "bf",
  BlockTxHash = "bx",
  BlockStateHash = "bs",
  Channel = "ch",
  ContractAddress = "ct",
  ContractBytearray = "cb",
  ContractStoreKey = "ck",
  ContractStoreValue = "cv",
  Transaction = "tx",
  TxHash = "th",
  OracleAddress = "ok",
  OracleQuery = "ov",
  OracleQueryId = "oq",
  OracleResponse = "or",
  AccountAddress = "ak",
  Signature = "sg",
  Commitment = "cm",
  PeerPubkey = "pp",
  Name = "nm",
  State = "st",
  Poi = "pi",
  StateTrees = "ss",
  CallStateTree = "cs",
  Bytearray = "ba",
}

const base64Types = [
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
] as const;

const base58Types = [
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
] as const;

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
} as const;

export enum Tag {
  Account = 10,
  SignedTx = 11,
  SpendTx = 12,
  Oracle = 20,
  // OracleQuery = 21,
  OracleRegisterTx = 22,
  OracleQueryTx = 23,
  OracleResponseTx = 24,
  OracleExtendTx = 25,
  Name = 30,
  // NameCommitment = 31,
  NameClaimTx = 32,
  NamePreclaimTx = 33,
  NameUpdateTx = 34,
  NameRevokeTx = 35,
  NameTransferTx = 36,
  // NameAuction = 37,
  Contract = 40,
  ContractCall = 41,
  ContractCreateTx = 42,
  ContractCallTx = 43,
  ChannelCreateTx = 50,
  // ChannelSetDelegatesTx = 501,
  ChannelDepositTx = 51,
  ChannelWithdrawTx = 52,
  ChannelForceProgressTx = 521,
  ChannelCloseMutualTx = 53,
  ChannelCloseSoloTx = 54,
  ChannelSlashTx = 55,
  ChannelSettleTx = 56,
  ChannelOffChainTx = 57,
  ChannelOffChainUpdateTransfer = 570,
  ChannelOffChainUpdateDeposit = 571,
  ChannelOffChainUpdateWithdraw = 572,
  ChannelOffChainUpdateCreateContract = 573,
  ChannelOffChainUpdateCallContract = 574,
  // ChannelOffChainUpdateMeta = 576,
  ChannelClientReconnectTx = 575,
  Channel = 58,
  ChannelSnapshotSoloTx = 59,
  TreesPoi = 60,
  // TreesDb = 61,
  StateTrees = 62,
  Mtree = 63,
  MtreeValue = 64,
  ContractsMtree = 621,
  CallsMtree = 622,
  ChannelsMtree = 623,
  NameserviceMtree = 624,
  OraclesMtree = 625,
  AccountsMtree = 626,
  // CompilerSophia = 70,
  GaAttachTx = 80,
  GaMetaTx = 81,
  PayingForTx = 82,
  GaMetaTxAuthData = 810,
  // KeyBlock = 100,
  // MicroBlock = 101,
  // LightMicroBlock = 102,
  // Pof = 200,
}

export function sha256hash(input: Uint8Array | string): Buffer {
  return new Sha256().update(input).digest();
}

// remove after dropping webpack4 support
const isWebpack4Buffer = (() => {
  try {
    Buffer.concat([Uint8Array.from([])]);
    return false;
  } catch (error) {
    return true;
  }
})();

export function isKeyOfObject<T extends object>(
  key: string | number | symbol,
  object: T,
): key is keyof T {
  return key in object;
}

const getChecksum = (payload: Uint8Array): Buffer =>
  sha256hash(sha256hash(payload)).slice(0, 4);

export const concatBuffers = isWebpack4Buffer
  ? (list: readonly Uint8Array[], totalLength?: number): Buffer =>
      Buffer.concat(
        list.map((el) => Buffer.from(el)),
        totalLength,
      )
  : Buffer.concat;

const addChecksum = (payload: Uint8Array): Buffer =>
  concatBuffers([payload, getChecksum(payload)]);

function getPayload(buffer: Buffer): Buffer {
  const payload = buffer.slice(0, -4);
  // if (!getChecksum(payload).equals(buffer.slice(-4))) throw new InvalidChecksumError();
  return payload;
}

const base64 = {
  encode: (buffer: Uint8Array) => addChecksum(buffer).toString("base64"),
  decode: (string: string) => getPayload(Buffer.from(string, "base64")),
};

const base58 = {
  encode: (buffer: Uint8Array) => bs58Encode(addChecksum(buffer)),
  decode: (string: string) => getPayload(Buffer.from(bs58Decode(string))),
};

function ensureValidLength(data: Uint8Array, type: Encoding): void {
  if (!isKeyOfObject(type, byteSizeForType)) return;
  const reqLen = byteSizeForType[type];
  if (reqLen == null || data.length === reqLen) return;
  throw new PayloadLengthError(
    `Payload should be ${reqLen} bytes, got ${data.length} instead`,
  );
}

const parseType = (maybeType: unknown): [Encoding, typeof base64] => {
  const base64Type = base64Types.find((t) => t === maybeType);
  if (base64Type != null) return [base64Type, base64];
  const base58Type = base58Types.find((t) => t === maybeType);
  if (base58Type != null) return [base58Type, base58];
  throw new ArgumentError(
    "prefix",
    `one of ${[...base58Types, ...base64Types].join(", ")}`,
    maybeType,
  );
};

export function decode(data: any): Buffer {
  const [prefix, encodedPayload, extra] = data.split("_");
  if (encodedPayload == null)
    throw new DecodeError(`Encoded string missing payload: ${data}`);
  if (extra != null)
    throw new DecodeError(`Encoded string have extra parts: ${data}`);
  const [type, encoder] = parseType(prefix);
  const payload = encoder.decode(encodedPayload);
  ensureValidLength(payload, type);
  return payload;
}

export function isContainingNestedTx(tx: any): boolean {
  return [
    "GAMetaTx", // aeSdk: GaMetaTx, mdw: GAMetaTx
    Tag[Tag.GaMetaTx],
    Tag[Tag.PayingForTx],
  ].includes(tx.type);
}

export function getInnerTransaction(tx?: any): any {
  if (!tx) {
    return null;
  }
  if (isContainingNestedTx(tx)) {
    return tx.tx?.tx;
  }
  return tx;
}

export function getTransactionPayload(transaction: any) {
  const innerTx = getInnerTransaction(transaction.tx);
  return innerTx?.payload ? decode(innerTx?.payload).toString() : null;
}

export const renderGetPublicKey = (host: any, value: any) => {
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Confirm getting public key"),
        text(host),
        divider(),
        text(value),
      ]),
    },
  });
};

export const renderSignTransaction = (host: any, message: any) => {
  const message2 = getTransactionPayload(message);
  // console.log("host", host);
  // console.log("message", message);

  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign Transaction"),
        text(host),
        text(JSON.stringify(message2)),
        divider(),
        // copyable(getTransactionPayload(message) ?? ""),
        copyable(JSON.stringify(message2)),
      ]),
    },
  });
};

export const renderSignMessage = (host: any, message: any) => {
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign message"),
        text(host),
        divider(),
        copyable(message),
      ]),
    },
  });
};
