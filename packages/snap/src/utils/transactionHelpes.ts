import { Tag } from "../types/tags";

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
