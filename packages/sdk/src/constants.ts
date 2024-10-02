export enum NetworkId {
  mainnet = "ae_mainnet",
  testnet = "ae_uat",
}

export const networks = {
  [NetworkId.mainnet]: {
    id: NetworkId.mainnet,
    name: "mainnet",
    rpcUrl: "https://mainnet.aeternity.io",
  },
  [NetworkId.testnet]: {
    id: NetworkId.testnet,
    name: "testnet",
    rpcUrl: "https://testnet.aeternity.io",
  },
} as const;

export const getNetworkRpcUrl = (networkId: NetworkId = NetworkId.testnet): string => {
  return networks[networkId].rpcUrl;
};

export const getNetworkName = (networkId: NetworkId = NetworkId.testnet): string => {
  return networks[networkId].name;
};

export const getNetworkId = (networkId: NetworkId = NetworkId.testnet): NetworkId => networkId;
