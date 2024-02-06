import { divider, panel, text } from "@metamask/snaps-ui";
import { TxSpendDto, TextPanel, TxContractCallDto } from "./types";

export const labelPanel = (args?: TextPanel) => {
  const { label, value, isCustomValue }: TextPanel = args ?? {};

  return panel([
    text(value && label ? label : ""),
    isCustomValue ? text(value ?? "") : text(value ? `**${value}**` : ""),
  ]);
};

export const contactCallPanel = (args?: any) => {
  return panel([
    divider(),
    text("Contract call"),
    divider(),
    labelPanel({ label: "Address from", value: args.callerId }),
    labelPanel({ label: "Address to", value: args.contractId }),
    labelPanel({
      label: "Fee",
      value: args.fee ? `**${args.fee} AE** ${args.feeInUsd}` : undefined,
      isCustomValue: true,
    }),
  ]);
};

export const contractTxPanel = (dto?: TxContractCallDto) => {
  const { args, callData, contractId, nonce } = dto || {};
  return panel([
    divider(),
    text("Transaction details"),
    divider(),
    labelPanel({ label: "Function name", value: dto?.function }),
    labelPanel({
      label: "Arguments",
      value: args ? args.map((arg) => arg.value).join(",") : undefined,
    }),
    labelPanel({ label: "Call data", value: callData }),
    labelPanel({ label: "Contract ID", value: contractId }),
    labelPanel({ label: "Nonce", value: nonce }),
  ]);
};

export const txSpendPanel = (args?: TxSpendDto) => {
  const { senderId, recipientId, amount, fee, feeInUsd, nonce }: TxSpendDto =
    args || {};
  return panel([
    divider(),
    text("Transfer"),
    divider(),
    labelPanel({ label: "Address from", value: senderId }),
    labelPanel({ label: "Address to", value: recipientId }),
    labelPanel({ label: "Amount", value: amount }),
    labelPanel({
      label: "Fee",
      value: fee ? `**${fee} AE** ${feeInUsd}` : undefined,
      isCustomValue: true,
    }),
    labelPanel({ label: "Nonce", value: nonce?.toString() }),
  ]);
};
