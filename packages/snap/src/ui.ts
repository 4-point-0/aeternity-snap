import { panel, heading, text, copyable, divider } from "@metamask/snaps-ui";
import { TxContractCallDto, TxSpendDto } from "./common/types";
import {
  contactCallPanel,
  contractTxPanel,
  txSpendPanel,
} from "./common/components";

export const renderGetPublicKey = (host: string, value: string) => {
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

export const renderSignContractTx = (host: string, dto?: TxContractCallDto) => {
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign transaction"),
        text(`Host: **${host}**`),
        contactCallPanel(dto),
        contractTxPanel(dto),
      ]),
    },
  });
};

export const renderSpendTx = (host: string, dto?: TxSpendDto) => {
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign transaction"),
        text(`Host: **${host}**`),
        txSpendPanel(dto),
      ]),
    },
  });
};

export const renderSignTx = (host: string, tx: string) => {
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign transaction"),
        text(`Host: **${host}**`),
        divider(),
        text("Transaction"),
        copyable(tx),
      ]),
    },
  });
};

export const renderSignMessage = (host: string, message: string) => {
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
