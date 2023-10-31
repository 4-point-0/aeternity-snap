import AccountBase from "./Base";
import {
  generateKeyPairFromSecret,
  sign,
  generateKeyPair,
  hash,
  messageToHash,
} from "../utils/crypto";
import { ArgumentError } from "../utils/errors";
import { decode, Encoded } from "../utils/encoder";
import { concatBuffers } from "../utils/other";

export function getBufferToSign(
  transaction: Encoded.Transaction,
  networkId: string,
  innerTx: boolean
): Uint8Array {
  const prefixes = [networkId];
  if (innerTx) prefixes.push("inner_tx");
  const rlpBinaryTx = decode(transaction);
  return concatBuffers([Buffer.from(prefixes.join("-")), hash(rlpBinaryTx)]);
}
