import { panel, heading, text, copyable, divider } from "@metamask/snaps-ui";
import { TxContractCallDto, TxSpendDto } from "./common/types";
import {
  contactCallPanel,
  contractTxPanel,
  txSpendPanel,
} from "./common/components";

export const renderGetPublicKey = async (
  host: string,
  value: string,
): Promise<boolean> => {
  const confirmation = await snap.request({
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
  return confirmation;
};

export const renderSignContractTx = async (
  host: string,
  dto?: TxContractCallDto,
): Promise<boolean> => {
  const confirmation = await snap.request({
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

  return confirmation;
};

export const renderSpendTx = async (
  host: string,
  dto?: TxSpendDto,
): Promise<boolean> => {
  const confirmed = await snap.request({
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

  return confirmed;
};

export const renderSignTx = async (
  host: string,
  tx: string,
): Promise<boolean> => {
  const confirmed = await snap.request({
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

  return confirmed;
};

export const renderSignMessage = (
  host: string,
  message: string,
): Promise<boolean> => {
  const confirmation = snap.request({
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
  return confirmation;
};
