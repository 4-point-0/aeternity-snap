import React, { useContext, useState } from "react";
import { AESnap } from '@aeternity-snap/sdk';
import { TxParamsAsync } from "@aeternity/aepp-sdk/es/tx/builder/schema";
import { NetworkId } from '../common/constants';

interface MetamaskContext {
  connectAccount: () => void;
  disconnectAccount: () => void;
  signMessage: (msg: string) => Promise<any>;
  signAndSendTransaction: (payload: TxParamsAsync) => Promise<string>;
  address: string | null;
  currentOperationalNetwork: string;
  changeOperationalNetwork: (network: string) => void;
}

const MetamaskContext = React.createContext<MetamaskContext | null>(null);

export const MetamaskProvider = ({ children }: any) => {
  const [address, setAddress] = useState<string | null>(null);
  const [currentOperationalNetwork, setCurrentOperationalNetwork] = useState<string>("testnet");

  const connectAccount = async () => {
    const aeSnap = await AESnap.connect(NetworkId.testnet);
    const publicKey = await aeSnap.getPublicKey();
    setAddress(publicKey);
  };

  const signMessage = async (msg: string) => {
    const aeSnap = await AESnap.connect(NetworkId.testnet);
    return aeSnap.signMessage(msg);
  };

  const signAndSendTransaction = async (payload: TxParamsAsync) => {
    const aeSnap = await AESnap.connect(NetworkId.testnet);
    return aeSnap.signAndSendTransaction(payload);
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
