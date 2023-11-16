"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkId = exports.getNetworkName = exports.getNetworkRpcUrl = exports.networks = exports.NetworkId = void 0;
var NetworkId;
(function (NetworkId) {
    NetworkId["mainnet"] = "mainnet";
    NetworkId["testnet"] = "testnet";
})(NetworkId = exports.NetworkId || (exports.NetworkId = {}));
exports.networks = {
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
const getNetworkRpcUrl = (networkId) => {
    switch (networkId) {
        case "mainnet":
            return exports.networks[NetworkId.mainnet].rpcUrl;
        case "testnet":
            return exports.networks[NetworkId.testnet].rpcUrl;
        default:
            return exports.networks[NetworkId.testnet].rpcUrl;
    }
};
exports.getNetworkRpcUrl = getNetworkRpcUrl;
const getNetworkName = (networkId) => {
    switch (networkId) {
        case "mainnet":
            return exports.networks[NetworkId.mainnet].name;
        case "testnet":
            return exports.networks[NetworkId.testnet].name;
        default:
            return exports.networks[NetworkId.testnet].name;
    }
};
exports.getNetworkName = getNetworkName;
const getNetworkId = (networkId) => {
    switch (networkId) {
        case "mainnet":
            return exports.networks[NetworkId.mainnet].id;
        case "testnet":
            return exports.networks[NetworkId.testnet].id;
        default:
            return exports.networks[NetworkId.testnet].id;
    }
};
exports.getNetworkId = getNetworkId;
//# sourceMappingURL=constants.js.map