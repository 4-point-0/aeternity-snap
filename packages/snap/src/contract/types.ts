export type AeDecodedCallData = {
  functionName: string;
  args: string[];
};

export const TX_FUNCTIONS = {
  tip: "tip",
  retip: "retip",
  tipToken: "tip_token",
  retipToken: "retip_token",
  transfer: "transfer",
  deposit: "deposit",
  propose: "propose", // Multisig
  addLiquidity: "add_liquidity",
  addLiquidityAe: "add_liquidity_ae",
  removeLiquidity: "remove_liquidity",
  removeLiquidityAe: "remove_liquidity_ae",
  swapExactTokensForTokens: "swap_exact_tokens_for_tokens",
  swapTokensForExactTokens: "swap_tokens_for_exact_tokens",
  swapExactAeForTokens: "swap_exact_ae_for_tokens",
  swapTokensForExactAe: "swap_tokens_for_exact_ae",
  swapExactTokensForAe: "swap_exact_tokens_for_ae",
  swapAeForExactTokens: "swap_ae_for_exact_tokens",
  createAllowance: "create_allowance",
  changeAllowance: "change_allowance",
  transferAllowance: "transfer_allowance",
  transferPayload: "transfer_payload",
  withdraw: "withdraw",
  claim: "claim",
  spend: "spend",
  namePreclaim: "name_preclaim",
  nameClaim: "name_claim",
  nameTransfer: "name_transfer",
  incompleteTransfer: "incomplete_transfer",
  pendingSpend: "pending_spend",
  pendingTransfer: "pending_transfer",
  pendingTipAe: "pending_tip_ae",
  pendingTipToken: "pending_tip_token",
  payForGaAttach: "pay_for_ga_attach",
  gaMetaSpend: "ga_meta_spend",
} as const;

export type ObjectValues<T> = T[keyof T];

export type TxFunctionRaw = ObjectValues<typeof TX_FUNCTIONS>;

export type TxArguments = {
  type: "address" | "contract" | "tuple" | "list" | "bool" | "string" | "int";
  value: any;
};

export type TxParams = {
  function: TxFunctionRaw;
  arguments: TxArguments[];
};

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
