import { TxArguments } from "../contract/types";

export type TextPanel = {
  label?: string;
  value?: string;
  isCustomValue?: boolean;
};

export type TxContractCallDto = {
  callerId?: string;
  fee?: string;
  amount?: string;
  feeInUsd?: string;
  function?: string;
  args?: TxArguments[];
  callData?: string;
  contractId?: string;
  nonce?: string;
};

export type TxSpendDto = {
  amount?: string;
  fee?: string;
  feeInUsd?: string;
  nonce?: number;
  payload?: string;
  recipientId?: string;
  senderId?: string;
  tag?: number;
  ttl?: number;
  version?: number;
};

export type TxContractCallEncodedDto = {
  callerId?: string;
  amount?: string;
  fee?: string;
  callData?: string;
  contractId?: string;
  nonce?: string;
};

export type TxEncodedDto = {
  abiVersion?: number;
  amount?: string;
  callData?: string;
  callerId?: string;
  contractId?: string;
  fee?: string;
  gasLimit?: number;
  gasPrice?: string;
  nonce?: number;
  tag?: number;
  ttl?: number;
  version?: number;
};
