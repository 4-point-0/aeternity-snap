import React, { useContext } from "react";

interface MetamaskContext {
  connectAccount: () => void;
  disconnectAccount: () => void;
  address: string | null;
}

const MetamaskContext = React.createContext<MetamaskContext | null>(null);

export const MetamaskProvider = ({ children }: any) => {
  const snapId = `local:${"http://localhost:8080"}`;

  const [address, setAddress] = React.useState<string | null>(null);

  const getSnaps = async () => {
    return await (window as any).ethereum.request({
      method: "wallet_getSnaps",
    });
  };

  const getSnap = async (id: string, version?: string) => {
    try {
      const snaps = await getSnaps();
      return Object.values(snaps).find(
        (snap) =>
          (snap as any).id === id &&
          (!version || (snap as any).version === version)
      );
    } catch (e) {
      console.log("Failed to obtain installed snap", e);
      return undefined;
    }
  };

  const connectAccount = async () => {
    const snap = await getSnap(snapId);

    if (snap) {
      getPubkey();
      return;
    }

    try {
      const response = await (window as any).ethereum.request({
        method: "wallet_requestSnaps",
        params: { [snapId]: {} },
      });
      getPubkey();
    } catch (err: any) {
      console.error(err);
      alert("Problem happened: " + err.message || err);
    }
  };

  async function getPubkey() {
    try {
      const response = await (window as any).ethereum.request({
        method: "wallet_invokeSnap",
        params: {
          snapId,
          request: {
            method: "getPublicKey",
            params: {
              derivationPath: [`0'`, `0'`, `0'`],
              confirm: true,
            },
          },
        },
      });
      setAddress(response);
    } catch (err) {
      console.error(err);
      alert("Problem happened: " + (err as any).message || err);
    }
  }

  const disconnectAccount = async () => {
    setAddress(null);
  };

  return (
    <MetamaskContext.Provider
      value={{
        connectAccount,
        disconnectAccount,
        address,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};

export function useMetamask() {
  const context = useContext(MetamaskContext);

  if (!context) {
    throw new Error("useMetamask must be used within a MetamaskContext");
  }

  return context;
}
