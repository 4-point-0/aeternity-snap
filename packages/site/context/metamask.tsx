import { AESnap, NetworkId } from "@aeternity-snap/sdk";
import { TxParamsAsync } from "@aeternity/aepp-sdk/es/tx/builder/schema";
import React, { useContext, useEffect, useState } from "react";

interface MetamaskContext {
  connectAccount: () => void;
  disconnectAccount: () => void;
  signMessage: (msg: string) => Promise<any>;
  signAndSendTransaction: (
    payload: TxParamsAsync,
  ) => Promise<string | undefined>;
  address: string | null;
  currentOperationalNetwork: string;
  changeOperationalNetwork: (network: string) => void;
}

const MetamaskContext = React.createContext<MetamaskContext | null>(null);

export const MetamaskProvider = ({ children }: any) => {
  const [address, setAddress] = useState<string | null>(null);
  const [currentOperationalNetwork, setCurrentOperationalNetwork] =
    useState<string>("testnet");

  const [aeSnap, setAeSnap] = useState<AESnap | null>(null);

  useEffect(() => {
    connectAccount();
  }, [currentOperationalNetwork]);

  const getNetwork = () => {
    if (currentOperationalNetwork.toLowerCase() === "testnet") {
      return NetworkId.testnet;
    } else if (currentOperationalNetwork.toLowerCase() === "mainnet") {
      return NetworkId.mainnet;
    }

    return NetworkId.testnet;
  };

  const connectAccount = async () => {
    const snap = await AESnap.connect(getNetwork());
    setAeSnap(snap);
    const response = await snap?.getPublicKey();
    setAddress(response?.publicKey ?? null);
  };

  const signMessage = async (msg: string) => {
    return aeSnap?.signMessage(msg);
  };

  const signAndSendTransaction = async (payload: TxParamsAsync) => {
    return aeSnap?.signAndSendTransaction(payload);
  };

  const disconnectAccount = () => {
    setAddress(null);
  };

  const changeOperationalNetwork = (network: string) => {
    setCurrentOperationalNetwork(network);
  };

  return (
    <MetamaskContext.Provider
      value={{
        connectAccount,
        disconnectAccount,
        address,
        signMessage,
        signAndSendTransaction,
        currentOperationalNetwork,
        changeOperationalNetwork,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};

export function useMetamask() {
  const context = useContext(MetamaskContext);
  if (!context) {
    throw new Error("useMetamask must be used within a MetamaskProvider");
  }
  return context;
}
