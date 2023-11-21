import * as coreClient from "@azure/core-client";
export type OffChainUpdateUnion = OffChainUpdate | OffChainTransfer | OffChainWithdrawal | OffChainDeposit | OffChainNewContract | OffChainCallContract;
/** A mix of KeyBlock, MicroBlockHeader properties. */
export interface Header {
    /** Base58Check encoded tagged hash */
    hash: string;
    height: string;
    /** Base58Check encoded tagged hash */
    prevHash: string;
    /** Base58Check encoded tagged hash */
    prevKeyHash: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    /** Base58Check encoded tagged pubkey */
    miner?: string;
    /** Base58Check encoded tagged pubkey */
    beneficiary?: string;
    target?: string;
    pow?: string[];
    nonce?: string;
    time: string;
    version: string;
    /** Base64Check encoded tagged byte array */
    info?: string;
    /** Base58Check encoded tagged hash */
    pofHash?: string;
    /** Base58Check encoded tagged hash */
    txsHash?: string;
    /** Base58Check encoded tagged value */
    signature?: string;
}
export interface ErrorModel {
    reason: string;
}
export interface KeyBlock {
    /** Base58Check encoded tagged hash */
    hash: string;
    height: string;
    /** Base58Check encoded tagged hash */
    prevHash: string;
    /** Base58Check encoded tagged hash */
    prevKeyHash: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    /** Base58Check encoded tagged pubkey */
    miner: string;
    /** Base58Check encoded tagged pubkey */
    beneficiary: string;
    target: string;
    pow?: string[];
    nonce?: string;
    time: string;
    version: string;
    /** Base64Check encoded tagged byte array */
    info: string;
}
export interface HashResponse {
    hash: string;
}
export interface HeightResponse {
    height: string;
}
export interface MicroBlockHeader {
    /** Base58Check encoded tagged hash */
    hash: string;
    height: string;
    /** Base58Check encoded tagged hash */
    pofHash: string;
    /** Base58Check encoded tagged hash */
    prevHash: string;
    /** Base58Check encoded tagged hash */
    prevKeyHash: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    /** Base58Check encoded tagged hash */
    txsHash: string;
    /** Base58Check encoded tagged value */
    signature: string;
    time: string;
    version: string;
}
export interface SignedTxs {
    transactions: SignedTx[];
}
export interface SignedTx {
    /** A mix of all transaction types. */
    tx: Tx;
    blockHeight: string;
    /** Base58Check encoded tagged hash */
    blockHash: string;
    /** Base58Check encoded tagged hash */
    hash: string;
    /** At least one signature is required unless for Generalized Account Meta transactions */
    signatures: string[];
}
/** A mix of all transaction types. */
export interface Tx {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    type: "Tx";
    /** Base58Check encoded tagged pubkey */
    recipientId?: string;
    amount?: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    senderId?: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    payload?: string;
    /** Base58Check encoded tagged pubkey */
    initiatorId?: string;
    initiatorAmount?: string;
    /** Base58Check encoded tagged pubkey */
    responderId?: string;
    responderAmount?: string;
    channelReserve?: string;
    lockPeriod?: string;
    /** Base58Check encoded tagged pubkey */
    stateHash?: string;
    delegateIds?: Delegates;
    /** Base58Check encoded tagged pubkey */
    channelId?: string;
    /** Base58Check encoded tagged pubkey */
    fromId?: string;
    round?: string;
    /** Base58Check encoded tagged pubkey */
    toId?: string;
    update?: OffChainUpdateUnion;
    /** Base64Check encoded tagged byte array */
    offchainTrees?: string;
    initiatorAmountFinal?: string;
    responderAmountFinal?: string;
    /** Base64Check encoded tagged byte array */
    poi?: string;
    initiatorDelegateIds?: string[];
    responderDelegateIds?: string[];
    queryFormat?: string;
    responseFormat?: string;
    queryFee?: string;
    oracleTtl?: RelativeTTL;
    /** Base58Check encoded tagged pubkey */
    accountId?: string;
    abiVersion?: string;
    /** Base58Check encoded tagged pubkey */
    oracleId?: string;
    query?: string;
    queryTtl?: Ttl;
    responseTtl?: RelativeTTL;
    /** Base58Check encoded tagged value */
    queryId?: string;
    response?: string;
    /** Base58Check encoded tagged value */
    commitmentId?: string;
    name?: string;
    nameSalt?: string;
    nameFee?: string;
    /** Base58Check encoded tagged value */
    nameId?: string;
    nameTtl?: string;
    pointers?: NamePointer[];
    clientTtl?: string;
    /** Base58Check encoded tagged pubkey */
    ownerId?: string;
    /** Base64Check encoded tagged byte array */
    code?: string;
    vmVersion?: string;
    deposit?: string;
    gas?: string;
    gasPrice?: string;
    /** Base64Check encoded tagged byte array */
    callData?: string;
    /** Base58Check encoded tagged pubkey */
    callerId?: string;
    /** Base58Check encoded tagged pubkey */
    contractId?: string;
    /** Contract authorization function hash (hex encoded) */
    authFun?: string;
    /** Base58Check encoded tagged pubkey */
    gaId?: string;
    /** Base64Check encoded tagged byte array */
    authData?: string;
    tx?: SignedTx;
    /** Base58Check encoded tagged pubkey */
    payerId?: string;
    version: string;
}
export interface Delegates {
    initiator?: string[];
    responder?: string[];
}
export interface OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainTransfer" | "OffChainWithdrawal" | "OffChainDeposit" | "OffChainNewContract" | "OffChainCallContract";
}
export interface RelativeTTL {
    type: "delta";
    value: string;
}
export interface Ttl {
    type: TTLType;
    value: string;
}
export interface NamePointer {
    key: string;
    /** Base58Check encoded tagged pubkey */
    id: string;
}
export interface CountResponse {
    count: string;
}
export interface Generation {
    keyBlock: KeyBlock;
    microBlocks: string[];
}
export interface Account {
    /** Base58Check encoded tagged pubkey */
    id: string;
    balance: string;
    nonce: string;
    /** Payable */
    payable?: boolean;
    kind?: AccountKind;
    /** Base58Check encoded tagged pubkey */
    contractId?: string;
    /** Name of authorization function for generalized account */
    authFun?: string;
}
export interface NextNonceResponse {
    nextNonce: string;
}
export interface DryRunInput {
    /** Base58Check encoded tagged hash */
    top?: string;
    /** Accounts */
    accounts?: DryRunAccount[];
    /** Txs */
    txs: DryRunInputItem[];
    /** Collect and return on-chain tx events that would result from the call */
    txEvents?: boolean;
}
export interface DryRunAccount {
    /** Base58Check encoded tagged pubkey */
    pubKey: string;
    amount: string;
}
export interface DryRunInputItem {
    /** Base64Check encoded tagged byte array */
    tx?: string;
    callReq?: DryRunCallReq;
}
export interface DryRunCallReq {
    /** Base64Check encoded tagged byte array */
    calldata: string;
    /** Base58Check encoded tagged pubkey */
    contract: string;
    amount?: string;
    gas?: string;
    /** Base58Check encoded tagged pubkey */
    caller?: string;
    nonce?: string;
    abiVersion?: string;
    context?: DryRunCallContext;
}
export interface DryRunCallContext {
    /** Base64Check encoded tagged byte array */
    tx?: string;
    /** Base58Check encoded tagged hash */
    txHash?: string;
    /** This call will have effects on the next call in this dry-run (or not) */
    stateful?: boolean;
}
export interface DryRunResults {
    /** results */
    results: DryRunResult[];
    /** on-chain tx events */
    txEvents?: Record<string, unknown>[];
}
export interface DryRunResult {
    type: string;
    result: string;
    reason?: string;
    callObj?: ContractCallObject;
}
export interface ContractCallObject {
    /** Base58Check encoded tagged pubkey */
    callerId: string;
    callerNonce: string;
    height: string;
    /** Base58Check encoded tagged pubkey */
    contractId: string;
    gasPrice: string;
    gasUsed: string;
    log: Event[];
    /** Base64Check encoded tagged byte array */
    returnValue: string;
    /** The status of the call 'ok | error | revert'. */
    returnType: ContractCallReturnType;
}
export interface Event {
    /** Base58Check encoded tagged pubkey */
    address: string;
    /** Event topics */
    topics: string[];
    /** Base64Check encoded tagged byte array */
    data: string;
}
export interface TxInfoObject {
    callInfo?: ContractCallObject;
    gaInfo?: GAObject;
    txInfo?: string;
}
export interface GAObject {
    /** Base58Check encoded tagged pubkey */
    callerId: string;
    height: string;
    gasPrice: string;
    gasUsed: string;
    /** Base64Check encoded tagged byte array */
    returnValue: string;
    /** The status of the call 'ok | error'. */
    returnType: GAReturnType;
    innerObject?: TxInfoObject;
}
export interface EncodedTx {
    /** Base64Check encoded tagged byte array */
    tx: string;
}
export interface PostTxResponse {
    /** Base58Check encoded tagged hash */
    txHash: string;
}
export interface ContractObject {
    /** Base58Check encoded tagged pubkey */
    id: string;
    /** Base58Check encoded tagged pubkey */
    ownerId: string;
    vmVersion: string;
    abiVersion: string;
    active: boolean;
    referrerIds: string[];
    deposit: string;
}
export interface ByteCode {
    /** Base64Check encoded tagged byte array */
    bytecode: string;
}
export interface PoI {
    /** Base64Check encoded tagged byte array */
    poi: string;
}
export interface RegisteredOracle {
    /** Base58Check encoded tagged pubkey */
    id: string;
    queryFormat: string;
    responseFormat: string;
    queryFee: string;
    ttl: string;
    abiVersion: string;
}
export interface OracleQueries {
    oracleQueries: OracleQuery[];
}
export interface OracleQuery {
    /** Base58Check encoded tagged value */
    id: string;
    /** Base58Check encoded tagged pubkey */
    senderId: string;
    senderNonce: string;
    /** Base58Check encoded tagged pubkey */
    oracleId: string;
    query: string;
    response: string;
    ttl: string;
    responseTtl: Ttl;
    fee: string;
}
export interface NameEntry {
    /** Base58Check encoded tagged value */
    id: string;
    /** Base58Check encoded tagged pubkey */
    owner?: string;
    ttl: string;
    pointers: NamePointer[];
}
export interface Channel {
    /** Base58Check encoded tagged pubkey */
    id: string;
    /** Base58Check encoded tagged pubkey */
    initiatorId: string;
    /** Base58Check encoded tagged pubkey */
    responderId: string;
    channelAmount: string;
    initiatorAmount: string;
    responderAmount: string;
    channelReserve: string;
    delegateIds: Delegates;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    round: string;
    soloRound: string;
    lockPeriod: string;
    lockedUntil: string;
}
export interface PeerPubKey {
    /** Base58Check encoded tagged pubkey */
    pubkey: string;
}
export interface Status {
    /** Base58Check encoded tagged hash */
    genesisKeyBlockHash: string;
    solutions: string;
    difficulty: string;
    syncing: boolean;
    syncProgress?: number;
    listening: boolean;
    protocols: Protocol[];
    nodeVersion: string;
    nodeRevision: string;
    peerCount: string;
    peerConnections: PeerConnections;
    pendingTransactionsCount: string;
    networkId: string;
    /** Base58Check encoded tagged pubkey */
    peerPubkey: string;
    /** Base58Check encoded tagged hash */
    topKeyBlockHash: string;
    topBlockHeight: string;
}
export interface Protocol {
    version: string;
    effectiveAtHeight: string;
}
export interface PeerConnections {
    inbound: string;
    outbound: string;
}
export interface SpendTx {
    /** Base58Check encoded tagged pubkey */
    recipientId: string;
    amount: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    senderId: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
}
export interface OracleRegisterTx {
    queryFormat: string;
    responseFormat: string;
    queryFee: string;
    oracleTtl: Ttl;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
    fee: string;
    ttl?: string;
    abiVersion?: string;
}
export interface OracleExtendTx {
    fee: string;
    oracleTtl: RelativeTTL;
    /** Base58Check encoded tagged pubkey */
    oracleId: string;
    nonce?: string;
    ttl?: string;
}
export interface OracleQueryTx {
    /** Base58Check encoded tagged pubkey */
    oracleId: string;
    query: string;
    queryFee: string;
    queryTtl: Ttl;
    responseTtl: RelativeTTL;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    senderId: string;
    nonce?: string;
}
export interface OracleRespondTx {
    /** Base58Check encoded tagged value */
    queryId: string;
    response: string;
    responseTtl: RelativeTTL;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    oracleId: string;
    nonce?: string;
}
export interface NamePreclaimTx {
    /** Base58Check encoded tagged value */
    commitmentId: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
}
export interface NameClaimTx {
    name: string;
    nameSalt: string;
    nameFee?: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
}
export interface NameUpdateTx {
    /** Base58Check encoded tagged value */
    nameId: string;
    nameTtl: string;
    pointers: NamePointer[];
    clientTtl: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
}
export interface NameTransferTx {
    /** Base58Check encoded tagged value */
    nameId: string;
    /** Base58Check encoded tagged pubkey */
    recipientId: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
}
export interface NameRevokeTx {
    /** Base58Check encoded tagged value */
    nameId: string;
    fee: string;
    ttl?: string;
    /** Base58Check encoded tagged pubkey */
    accountId: string;
    nonce?: string;
}
export interface CommitmentId {
    /** Base58Check encoded tagged value */
    commitmentId: string;
}
export interface NameHash {
    /** Base58Check encoded tagged value */
    nameId: string;
}
export interface ChannelCreateTx {
    /** Base58Check encoded tagged pubkey */
    initiatorId: string;
    initiatorAmount: string;
    /** Base58Check encoded tagged pubkey */
    responderId: string;
    responderAmount: string;
    channelReserve: string;
    lockPeriod: string;
    ttl?: string;
    fee: string;
    nonce?: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    delegateIds?: Delegates;
}
export interface ChannelDepositTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    amount: string;
    ttl?: string;
    fee: string;
    nonce: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    round: string;
}
export interface ChannelWithdrawTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    toId: string;
    amount: string;
    ttl?: string;
    fee: string;
    nonce: string;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    round: string;
}
export interface ChannelForceProgressTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
    round: string;
    update: OffChainUpdateUnion;
    /** Base58Check encoded tagged hash */
    stateHash: string;
    ttl?: string;
    fee: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    offchainTrees?: string;
}
export interface ChannelCloseMutualTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    initiatorAmountFinal: string;
    responderAmountFinal: string;
    ttl?: string;
    fee: string;
    nonce: string;
}
export interface ChannelCloseSoloTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
    ttl?: string;
    fee: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    poi: string;
}
export interface ChannelSlashTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
    ttl?: string;
    fee: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    poi: string;
}
export interface ChannelSettleTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    initiatorAmountFinal: string;
    responderAmountFinal: string;
    ttl?: string;
    fee: string;
    nonce: string;
}
export interface ChannelSnapshotSoloTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
    ttl?: string;
    fee: string;
    nonce?: string;
}
export interface ChannelSetDelegatesTx {
    /** Base58Check encoded tagged pubkey */
    channelId: string;
    /** Base58Check encoded tagged pubkey */
    fromId: string;
    initiatorDelegateIds: string[];
    responderDelegateIds: string[];
    /** Base58Check encoded tagged pubkey */
    stateHash: string;
    round: string;
    /** Base64Check encoded tagged byte array */
    payload: string;
    ttl?: string;
    fee: string;
    nonce?: string;
}
export interface PubKey {
    /** Base58Check encoded tagged pubkey */
    pubKey: string;
}
export interface PeerDetails {
    /** Hostname of peer */
    host: string;
    port: string;
    firstSeen: string;
    lastSeen: string;
    /** Base58Check encoded tagged hash */
    genesisHash: string;
    /** Base58Check encoded tagged hash */
    topHash: string;
    topDifficulty: string;
    networkId?: string;
    nodeVersion?: string;
    nodeRevision?: string;
    nodeVendor?: string;
    nodeOs?: string;
}
export interface Peers {
    /** All discovered peers */
    peers: string[];
    /** All blocked peers */
    blocked: string[];
}
export interface PeerCount {
    connected: PeerCountConnected;
    available: PeerCountAvailable;
    blocked: string;
}
export interface PeerCountConnected {
    inbound?: string;
    outbound?: string;
}
export interface PeerCountAvailable {
    verified?: string;
    unverified?: string;
}
export interface ContractCreateTx {
    /** Base58Check encoded tagged pubkey */
    ownerId: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    code: string;
    vmVersion: string;
    abiVersion: string;
    deposit: string;
    amount: string;
    gas: string;
    gasPrice: string;
    fee: string;
    ttl?: string;
    /** Base64Check encoded tagged byte array */
    callData: string;
}
export interface ContractCallTx {
    /** Base58Check encoded tagged pubkey */
    callerId: string;
    nonce?: string;
    /** Base58Check encoded tagged pubkey */
    contractId: string;
    abiVersion: string;
    fee: string;
    ttl?: string;
    amount: string;
    gas: string;
    gasPrice: string;
    /** Base64Check encoded tagged byte array */
    callData: string;
}
export interface UnsignedTx {
    /** Base64Check encoded tagged byte array */
    tx: string;
}
export interface TokenSupply {
    accounts?: string;
    contracts?: string;
    contractOracles?: string;
    locked?: string;
    oracles?: string;
    oracleQueries?: string;
    pendingRewards?: string;
    total?: string;
}
export interface GAAttachTx {
    /** Base58Check encoded tagged pubkey */
    ownerId: string;
    nonce?: string;
    /** Base64Check encoded tagged byte array */
    code: string;
    vmVersion: string;
    abiVersion: string;
    gas: string;
    gasPrice: string;
    fee: string;
    ttl?: string;
    /** Base64Check encoded tagged byte array */
    callData: string;
    /** Contract authorization function hash (hex encoded) */
    authFun: string;
}
export interface GAMetaTx {
    /** Base58Check encoded tagged pubkey */
    gaId: string;
    abiVersion: string;
    gas: string;
    gasPrice: string;
    fee: string;
    ttl?: string;
    /** Base64Check encoded tagged byte array */
    authData: string;
    tx: SignedTx;
}
export interface PayingForTx {
    /** Base58Check encoded tagged pubkey */
    payerId: string;
    fee: string;
    nonce?: string;
    tx: SignedTx;
}
export interface CheckTxInPoolResponse {
    status: string;
}
export interface OffChainTransfer extends OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainTransfer";
    /** Base58Check encoded tagged pubkey */
    from: string;
    /** Base58Check encoded tagged pubkey */
    to: string;
    amount: string;
}
export interface OffChainWithdrawal extends OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainWithdrawal";
    /** Base58Check encoded tagged pubkey */
    to: string;
    amount: string;
}
export interface OffChainDeposit extends OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainDeposit";
    /** Base58Check encoded tagged pubkey */
    from: string;
    amount: string;
}
export interface OffChainNewContract extends OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainNewContract";
    /** Base58Check encoded tagged pubkey */
    owner: string;
    vmVersion: string;
    abiVersion: string;
    code: ByteCode;
    deposit: string;
    /** Base64Check encoded tagged byte array */
    callData: string;
}
export interface OffChainCallContract extends OffChainUpdate {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    op: "OffChainCallContract";
    /** Base58Check encoded tagged pubkey */
    caller: string;
    /** Base58Check encoded tagged pubkey */
    contract: string;
    abiVersion: string;
    amount: string;
    gas: string;
    gasPrice: string;
    /** Base64Check encoded tagged byte array */
    callData: string;
}
export interface CreateContractUnsignedTx extends UnsignedTx {
    /** Base58Check encoded tagged pubkey */
    contractId: string;
}
/** Defines values for TTLType. */
export type TTLType = "delta" | "block";
/** Defines values for TxType. */
export type TxType = "SpendTx" | "ChannelCreateTx" | "ChannelDepositTx" | "ChannelWithdrawTx" | "ChannelForceProgressTx" | "ChannelCloseMutualTx" | "ChannelCloseSoloTx" | "ChannelSlashTx" | "ChannelSettleTx" | "ChannelSnapshotSoloTx" | "ChannelSetDelegatesTx" | "OracleRegisterTx" | "OracleExtendTx" | "OracleQueryTx" | "OracleRespondTx" | "NamePreclaimTx" | "NameClaimTx" | "NameUpdateTx" | "NameTransferTx" | "NameRevokeTx" | "ContractCreateTx" | "ContractCallTx" | "GAAttachTx" | "GAMetaTx" | "PayingForTx";
/** Defines values for AccountKind. */
export type AccountKind = "basic" | "generalized";
/** Defines values for NextNonceStrategy. */
export type NextNonceStrategy = "max" | "continuity";
/** Defines values for ContractCallReturnType. */
export type ContractCallReturnType = "ok" | "error" | "revert";
/** Defines values for GAReturnType. */
export type GAReturnType = "ok" | "error";
/** Defines values for OracleQueryType. */
export type OracleQueryType = "open" | "closed" | "all";
/** Optional parameters. */
export interface GetTopHeaderOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getTopHeader operation. */
export type GetTopHeaderResponse = Header;
/** Optional parameters. */
export interface GetCurrentKeyBlockOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getCurrentKeyBlock operation. */
export type GetCurrentKeyBlockResponse = KeyBlock;
/** Optional parameters. */
export interface GetCurrentKeyBlockHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getCurrentKeyBlockHash operation. */
export type GetCurrentKeyBlockHashResponse = HashResponse;
/** Optional parameters. */
export interface GetCurrentKeyBlockHeightOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getCurrentKeyBlockHeight operation. */
export type GetCurrentKeyBlockHeightResponse = HeightResponse;
/** Optional parameters. */
export interface GetPendingKeyBlockOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getPendingKeyBlock operation. */
export type GetPendingKeyBlockResponse = KeyBlock;
/** Optional parameters. */
export interface GetKeyBlockByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getKeyBlockByHash operation. */
export type GetKeyBlockByHashResponse = KeyBlock;
/** Optional parameters. */
export interface GetKeyBlockByHeightOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getKeyBlockByHeight operation. */
export type GetKeyBlockByHeightResponse = KeyBlock;
/** Optional parameters. */
export interface GetMicroBlockHeaderByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getMicroBlockHeaderByHash operation. */
export type GetMicroBlockHeaderByHashResponse = MicroBlockHeader;
/** Optional parameters. */
export interface GetMicroBlockTransactionsByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getMicroBlockTransactionsByHash operation. */
export type GetMicroBlockTransactionsByHashResponse = SignedTxs;
/** Optional parameters. */
export interface GetMicroBlockTransactionByHashAndIndexOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getMicroBlockTransactionByHashAndIndex operation. */
export type GetMicroBlockTransactionByHashAndIndexResponse = SignedTx;
/** Optional parameters. */
export interface GetMicroBlockTransactionsCountByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getMicroBlockTransactionsCountByHash operation. */
export type GetMicroBlockTransactionsCountByHashResponse = CountResponse;
/** Optional parameters. */
export interface GetCurrentGenerationOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getCurrentGeneration operation. */
export type GetCurrentGenerationResponse = Generation;
/** Optional parameters. */
export interface GetGenerationByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getGenerationByHash operation. */
export type GetGenerationByHashResponse = Generation;
/** Optional parameters. */
export interface GetGenerationByHeightOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getGenerationByHeight operation. */
export type GetGenerationByHeightResponse = Generation;
/** Optional parameters. */
export interface GetAccountByPubkeyOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAccountByPubkey operation. */
export type GetAccountByPubkeyResponse = Account;
/** Optional parameters. */
export interface GetAccountByPubkeyAndHeightOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAccountByPubkeyAndHeight operation. */
export type GetAccountByPubkeyAndHeightResponse = Account;
/** Optional parameters. */
export interface GetAccountByPubkeyAndHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getAccountByPubkeyAndHash operation. */
export type GetAccountByPubkeyAndHashResponse = Account;
/** Optional parameters. */
export interface GetPendingAccountTransactionsByPubkeyOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getPendingAccountTransactionsByPubkey operation. */
export type GetPendingAccountTransactionsByPubkeyResponse = SignedTxs;
/** Optional parameters. */
export interface GetAccountNextNonceOptionalParams extends coreClient.OperationOptions {
    /** What strategy to use in order to determine the next nonce: shall it check for continuity or return the largest nonce seen + 1. If you choose strategy max, then the greatest nonce seen in the account or currently in the transaction pool is incremented with 1 and returned. If you choose the strategy continuity, then transactions in the mempool are checked if there are gaps - missing nonces that prevent transactions with greater nonces to get included. */
    strategy?: NextNonceStrategy;
}
/** Contains response data for the getAccountNextNonce operation. */
export type GetAccountNextNonceResponse = NextNonceResponse;
/** Optional parameters. */
export interface ProtectedDryRunTxsOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the protectedDryRunTxs operation. */
export type ProtectedDryRunTxsResponse = DryRunResults;
/** Optional parameters. */
export interface GetTransactionByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getTransactionByHash operation. */
export type GetTransactionByHashResponse = SignedTx;
/** Optional parameters. */
export interface GetTransactionInfoByHashOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getTransactionInfoByHash operation. */
export type GetTransactionInfoByHashResponse = TxInfoObject;
/** Optional parameters. */
export interface PostTransactionOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the postTransaction operation. */
export type PostTransactionResponse = PostTxResponse;
/** Optional parameters. */
export interface GetContractOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getContract operation. */
export type GetContractResponse = ContractObject;
/** Optional parameters. */
export interface GetContractCodeOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getContractCode operation. */
export type GetContractCodeResponse = ByteCode;
/** Optional parameters. */
export interface GetContractPoIOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getContractPoI operation. */
export type GetContractPoIResponse = PoI;
/** Optional parameters. */
export interface GetOracleByPubkeyOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getOracleByPubkey operation. */
export type GetOracleByPubkeyResponse = RegisteredOracle;
/** Optional parameters. */
export interface GetOracleQueriesByPubkeyOptionalParams extends coreClient.OperationOptions {
    /** Last query id in previous page */
    from?: string;
    /** Max number of oracle queries */
    limit?: number;
    /** The type of a query: open, closed or all */
    type?: OracleQueryType;
}
/** Contains response data for the getOracleQueriesByPubkey operation. */
export type GetOracleQueriesByPubkeyResponse = OracleQueries;
/** Optional parameters. */
export interface GetOracleQueryByPubkeyAndQueryIdOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getOracleQueryByPubkeyAndQueryId operation. */
export type GetOracleQueryByPubkeyAndQueryIdResponse = OracleQuery;
/** Optional parameters. */
export interface GetNameEntryByNameOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getNameEntryByName operation. */
export type GetNameEntryByNameResponse = NameEntry;
/** Optional parameters. */
export interface GetChannelByPubkeyOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getChannelByPubkey operation. */
export type GetChannelByPubkeyResponse = Channel;
/** Optional parameters. */
export interface GetPeerPubkeyOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getPeerPubkey operation. */
export type GetPeerPubkeyResponse = PeerPubKey;
/** Optional parameters. */
export interface GetStatusOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getStatus operation. */
export type GetStatusResponse = Status;
/** Optional parameters. */
export interface GetChainEndsOptionalParams extends coreClient.OperationOptions {
}
/** Contains response data for the getChainEnds operation. */
export type GetChainEndsResponse = {
    /** The parsed response body. */
    body: string[];
};
/** Optional parameters. */
export interface NodeOptionalParams extends coreClient.ServiceClientOptions {
    /** If this flag is set to true, the response will have all integers set as strings */
    intAsString?: boolean;
    /** Overrides client endpoint. */
    endpoint?: string;
}
