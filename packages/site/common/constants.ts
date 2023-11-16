export enum NetworkId {
  mainnet = "mainnet",
  testnet = "testnet",
}

type Network = {
  id: string;
  name: string;
  rpcUrl: string;
};

export const networks: { [key: string]: Network } = {
  [NetworkId.mainnet]: {
    id: "ae_mainnet",
    name: "mainnet",
    rpcUrl: "https://mainnet.aeternity.io",
  },
  [NetworkId.testnet]: {
    id: "ae_uat",
    name: "testnet",
    rpcUrl: "https://testnet.aeternity.io",
  },
};

export const getNetworkRpcUrl = (networkId: string): string => {
  switch (networkId) {
    case "mainnet":
      return networks[NetworkId.mainnet].rpcUrl;

    case "testnet":
      return networks[NetworkId.testnet].rpcUrl;

    default:
      return networks[NetworkId.testnet].rpcUrl;
  }
};

export const getNetworkName = (networkId: string): string => {
  switch (networkId) {
    case "mainnet":
      return networks[NetworkId.mainnet].name;

    case "testnet":
      return networks[NetworkId.testnet].name;

    default:
      return networks[NetworkId.testnet].name;
  }
};

export const getNetworkId = (networkId: string): string => {
  switch (networkId) {
    case "mainnet":
      return networks[NetworkId.mainnet].id;

    case "testnet":
      return networks[NetworkId.testnet].id;

    default:
      return networks[NetworkId.testnet].id;
  }
};
