import * as coreClient from "@azure/core-client";
import {
  NodeOptionalParams,
  GetTopHeaderOptionalParams,
  GetTopHeaderResponse,
  GetCurrentKeyBlockOptionalParams,
  GetCurrentKeyBlockResponse,
  GetCurrentKeyBlockHashOptionalParams,
  GetCurrentKeyBlockHashResponse,
  GetCurrentKeyBlockHeightOptionalParams,
  GetCurrentKeyBlockHeightResponse,
  GetPendingKeyBlockOptionalParams,
  GetPendingKeyBlockResponse,
  GetKeyBlockByHashOptionalParams,
  GetKeyBlockByHashResponse,
  GetKeyBlockByHeightOptionalParams,
  GetKeyBlockByHeightResponse,
  GetMicroBlockHeaderByHashOptionalParams,
  GetMicroBlockHeaderByHashResponse,
  GetMicroBlockTransactionsByHashOptionalParams,
  GetMicroBlockTransactionsByHashResponse,
  GetMicroBlockTransactionByHashAndIndexOptionalParams,
  GetMicroBlockTransactionByHashAndIndexResponse,
  GetMicroBlockTransactionsCountByHashOptionalParams,
  GetMicroBlockTransactionsCountByHashResponse,
  GetCurrentGenerationOptionalParams,
  GetCurrentGenerationResponse,
  GetGenerationByHashOptionalParams,
  GetGenerationByHashResponse,
  GetGenerationByHeightOptionalParams,
  GetGenerationByHeightResponse,
  GetAccountByPubkeyOptionalParams,
  GetAccountByPubkeyResponse,
  GetAccountByPubkeyAndHeightOptionalParams,
  GetAccountByPubkeyAndHeightResponse,
  GetAccountByPubkeyAndHashOptionalParams,
  GetAccountByPubkeyAndHashResponse,
  GetPendingAccountTransactionsByPubkeyOptionalParams,
  GetPendingAccountTransactionsByPubkeyResponse,
  GetAccountNextNonceOptionalParams,
  GetAccountNextNonceResponse,
  DryRunInput,
  ProtectedDryRunTxsOptionalParams,
  ProtectedDryRunTxsResponse,
  GetTransactionByHashOptionalParams,
  GetTransactionByHashResponse,
  GetTransactionInfoByHashOptionalParams,
  GetTransactionInfoByHashResponse,
  EncodedTx,
  PostTransactionOptionalParams,
  PostTransactionResponse,
  GetContractOptionalParams,
  GetContractResponse,
  GetContractCodeOptionalParams,
  GetContractCodeResponse,
  GetContractPoIOptionalParams,
  GetContractPoIResponse,
  GetOracleByPubkeyOptionalParams,
  GetOracleByPubkeyResponse,
  GetOracleQueriesByPubkeyOptionalParams,
  GetOracleQueriesByPubkeyResponse,
  GetOracleQueryByPubkeyAndQueryIdOptionalParams,
  GetOracleQueryByPubkeyAndQueryIdResponse,
  GetNameEntryByNameOptionalParams,
  GetNameEntryByNameResponse,
  GetChannelByPubkeyOptionalParams,
  GetChannelByPubkeyResponse,
  GetPeerPubkeyOptionalParams,
  GetPeerPubkeyResponse,
  GetStatusOptionalParams,
  GetStatusResponse,
  GetChainEndsOptionalParams,
  GetChainEndsResponse,
} from "./models";
export declare class Node extends coreClient.ServiceClient {
  $host: string;
  intAsString?: boolean;
  /**
   * Initializes a new instance of the Node class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: NodeOptionalParams);
  /**
   * Get the top header (either key or micro block)
   * @param options The options parameters.
   */
  getTopHeader(
    options?: GetTopHeaderOptionalParams,
  ): Promise<GetTopHeaderResponse>;
  /**
   * Get the current key block
   * @param options The options parameters.
   */
  getCurrentKeyBlock(
    options?: GetCurrentKeyBlockOptionalParams,
  ): Promise<GetCurrentKeyBlockResponse>;
  /**
   * Get the hash of the current key block
   * @param options The options parameters.
   */
  getCurrentKeyBlockHash(
    options?: GetCurrentKeyBlockHashOptionalParams,
  ): Promise<GetCurrentKeyBlockHashResponse>;
  /**
   * Get the height of the current key block
   * @param options The options parameters.
   */
  getCurrentKeyBlockHeight(
    options?: GetCurrentKeyBlockHeightOptionalParams,
  ): Promise<GetCurrentKeyBlockHeightResponse>;
  /**
   * Get the pending key block
   * @param options The options parameters.
   */
  getPendingKeyBlock(
    options?: GetPendingKeyBlockOptionalParams,
  ): Promise<GetPendingKeyBlockResponse>;
  /**
   * Get a key block by hash
   * @param hash The hash of the block - either a keyblock or a microblock
   * @param options The options parameters.
   */
  getKeyBlockByHash(
    hash: string,
    options?: GetKeyBlockByHashOptionalParams,
  ): Promise<GetKeyBlockByHashResponse>;
  /**
   * Get a key block by height
   * @param height The height
   * @param options The options parameters.
   */
  getKeyBlockByHeight(
    height: number,
    options?: GetKeyBlockByHeightOptionalParams,
  ): Promise<GetKeyBlockByHeightResponse>;
  /**
   * Get a micro block header by hash
   * @param hash The hash of the block - either a keyblock or a microblock
   * @param options The options parameters.
   */
  getMicroBlockHeaderByHash(
    hash: string,
    options?: GetMicroBlockHeaderByHashOptionalParams,
  ): Promise<GetMicroBlockHeaderByHashResponse>;
  /**
   * Get micro block transactions by hash
   * @param hash The hash of the micro block
   * @param options The options parameters.
   */
  getMicroBlockTransactionsByHash(
    hash: string,
    options?: GetMicroBlockTransactionsByHashOptionalParams,
  ): Promise<GetMicroBlockTransactionsByHashResponse>;
  /**
   * Get a micro block transaction by hash and index
   * @param hash The hash of the micro block
   * @param index The index of the transaction in a block
   * @param options The options parameters.
   */
  getMicroBlockTransactionByHashAndIndex(
    hash: string,
    index: number,
    options?: GetMicroBlockTransactionByHashAndIndexOptionalParams,
  ): Promise<GetMicroBlockTransactionByHashAndIndexResponse>;
  /**
   * Get micro block transaction count by hash
   * @param hash The hash of the micro block
   * @param options The options parameters.
   */
  getMicroBlockTransactionsCountByHash(
    hash: string,
    options?: GetMicroBlockTransactionsCountByHashOptionalParams,
  ): Promise<GetMicroBlockTransactionsCountByHashResponse>;
  /**
   * Get the current generation
   * @param options The options parameters.
   */
  getCurrentGeneration(
    options?: GetCurrentGenerationOptionalParams,
  ): Promise<GetCurrentGenerationResponse>;
  /**
   * Get a generation by hash
   * @param hash The hash of the key block
   * @param options The options parameters.
   */
  getGenerationByHash(
    hash: string,
    options?: GetGenerationByHashOptionalParams,
  ): Promise<GetGenerationByHashResponse>;
  /**
   * Get a generation by height
   * @param height The height
   * @param options The options parameters.
   */
  getGenerationByHeight(
    height: number,
    options?: GetGenerationByHeightOptionalParams,
  ): Promise<GetGenerationByHeightResponse>;
  /**
   * Get an account by public key
   * @param pubkey The public key of the account
   * @param options The options parameters.
   */
  getAccountByPubkey(
    pubkey: string,
    options?: GetAccountByPubkeyOptionalParams,
  ): Promise<GetAccountByPubkeyResponse>;
  /**
   * Get an account by public key after the opening key block of the generation at height
   * @param pubkey The public key of the account
   * @param height The height
   * @param options The options parameters.
   */
  getAccountByPubkeyAndHeight(
    pubkey: string,
    height: number,
    options?: GetAccountByPubkeyAndHeightOptionalParams,
  ): Promise<GetAccountByPubkeyAndHeightResponse>;
  /**
   * Get an account by public key after the block indicated by hash. Can be either a micro block or a
   * keyblock hash
   * @param pubkey The public key of the account
   * @param hash The hash of the block - either a keyblock or a microblock
   * @param options The options parameters.
   */
  getAccountByPubkeyAndHash(
    pubkey: string,
    hash: string,
    options?: GetAccountByPubkeyAndHashOptionalParams,
  ): Promise<GetAccountByPubkeyAndHashResponse>;
  /**
   * Get pending account transactions by public key
   * @param pubkey The public key of the account
   * @param options The options parameters.
   */
  getPendingAccountTransactionsByPubkey(
    pubkey: string,
    options?: GetPendingAccountTransactionsByPubkeyOptionalParams,
  ): Promise<GetPendingAccountTransactionsByPubkeyResponse>;
  /**
   * Get an account's next nonce; This is computed according to whatever is the current account nonce and
   * what transactions are currently present in the transaction pool
   * @param pubkey The public key of the account
   * @param options The options parameters.
   */
  getAccountNextNonce(
    pubkey: string,
    options?: GetAccountNextNonceOptionalParams,
  ): Promise<GetAccountNextNonceResponse>;
  /**
   * Dry-run transactions on top of a given block. Supports all TXs except GAMetaTx, PayingForTx and
   * OffchainTx. The maximum gas limit of all calls is capped. The maximum gas limit per request is a
   * global node setting. Since DryRunCallReq object do not have a mandatory gas field, if not set a
   * default value of 1000000 is being used instead.
   * @param body transactions
   * @param options The options parameters.
   */
  protectedDryRunTxs(
    body: DryRunInput,
    options?: ProtectedDryRunTxsOptionalParams,
  ): Promise<ProtectedDryRunTxsResponse>;
  /**
   * Get a transaction by hash
   * @param hash The hash of the transaction
   * @param options The options parameters.
   */
  getTransactionByHash(
    hash: string,
    options?: GetTransactionByHashOptionalParams,
  ): Promise<GetTransactionByHashResponse>;
  /**
   * @param hash The hash of the transaction
   * @param options The options parameters.
   */
  getTransactionInfoByHash(
    hash: string,
    options?: GetTransactionInfoByHashOptionalParams,
  ): Promise<GetTransactionInfoByHashResponse>;
  /**
   * Post a new transaction
   * @param body The new transaction
   * @param options The options parameters.
   */
  postTransaction(
    body: EncodedTx,
    options?: PostTransactionOptionalParams,
  ): Promise<PostTransactionResponse>;
  /**
   * Get a contract by pubkey
   * @param pubkey Contract pubkey to get proof for
   * @param options The options parameters.
   */
  getContract(
    pubkey: string,
    options?: GetContractOptionalParams,
  ): Promise<GetContractResponse>;
  /**
   * Get contract code by pubkey
   * @param pubkey Contract pubkey to get proof for
   * @param options The options parameters.
   */
  getContractCode(
    pubkey: string,
    options?: GetContractCodeOptionalParams,
  ): Promise<GetContractCodeResponse>;
  /**
   * Get a proof of inclusion for a contract
   * @param pubkey Contract pubkey to get proof for
   * @param options The options parameters.
   */
  getContractPoI(
    pubkey: string,
    options?: GetContractPoIOptionalParams,
  ): Promise<GetContractPoIResponse>;
  /**
   * Get an oracle by public key
   * @param pubkey The public key of the oracle
   * @param options The options parameters.
   */
  getOracleByPubkey(
    pubkey: string,
    options?: GetOracleByPubkeyOptionalParams,
  ): Promise<GetOracleByPubkeyResponse>;
  /**
   * Get oracle queries by public key
   * @param pubkey The public key of the oracle
   * @param options The options parameters.
   */
  getOracleQueriesByPubkey(
    pubkey: string,
    options?: GetOracleQueriesByPubkeyOptionalParams,
  ): Promise<GetOracleQueriesByPubkeyResponse>;
  /**
   * Get an oracle query by public key and query ID
   * @param pubkey The public key of the oracle
   * @param queryId The ID of the query
   * @param options The options parameters.
   */
  getOracleQueryByPubkeyAndQueryId(
    pubkey: string,
    queryId: string,
    options?: GetOracleQueryByPubkeyAndQueryIdOptionalParams,
  ): Promise<GetOracleQueryByPubkeyAndQueryIdResponse>;
  /**
   * Get name entry from naming system
   * @param name The name key of the name entry
   * @param options The options parameters.
   */
  getNameEntryByName(
    name: string,
    options?: GetNameEntryByNameOptionalParams,
  ): Promise<GetNameEntryByNameResponse>;
  /**
   * Get channel by public key
   * @param pubkey The pubkey of the channel
   * @param options The options parameters.
   */
  getChannelByPubkey(
    pubkey: string,
    options?: GetChannelByPubkeyOptionalParams,
  ): Promise<GetChannelByPubkeyResponse>;
  /**
   * Get peer public key
   * @param options The options parameters.
   */
  getPeerPubkey(
    options?: GetPeerPubkeyOptionalParams,
  ): Promise<GetPeerPubkeyResponse>;
  /**
   * Get the status of a node
   * @param options The options parameters.
   */
  getStatus(options?: GetStatusOptionalParams): Promise<GetStatusResponse>;
  /**
   * Get oldest keyblock hashes counting from genesis including orphans
   * @param options The options parameters.
   */
  getChainEnds(
    options?: GetChainEndsOptionalParams,
  ): Promise<GetChainEndsResponse>;
}
