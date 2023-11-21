import { hash } from "../utils/crypto";

import { decode, Encoded } from "../utils/encoder";
import { concatBuffers } from "../utils/other";

export const getBufferToSign = (
  transaction: Encoded.Transaction,
  innerTx: boolean,
  networkId?: string,
): Uint8Array => {
  const prefixes = [networkId];
  if (innerTx) prefixes.push("inner_tx");
  const rlpBinaryTx = decode(transaction);
  return concatBuffers([Buffer.from(prefixes.join("-")), hash(rlpBinaryTx)]);
};
