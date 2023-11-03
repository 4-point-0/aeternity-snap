import { panel, heading, text, copyable, divider } from "@metamask/snaps-ui";

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
  return snap.request({
    method: "snap_dialog",
    params: {
      type: "confirmation",
      content: panel([
        heading("Sign transaction"),
        text(host),
        divider(),
        copyable(message),
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
