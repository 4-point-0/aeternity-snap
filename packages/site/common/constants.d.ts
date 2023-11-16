export declare enum NetworkId {
    mainnet = "mainnet",
    testnet = "testnet"
}
declare type Network = {
    id: string;
    name: string;
    rpcUrl: string;
};
export declare const networks: {
    [key: string]: Network;
};
export declare const getNetworkRpcUrl: (networkId: string) => string;
export declare const getNetworkName: (networkId: string) => string;
export declare const getNetworkId: (networkId: string) => string;
export {};
