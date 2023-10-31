import { TxParams as TxParamsComplex, TxParamsAsync as TxParamsAsyncComplex, TxUnpacked as TxUnpackedComplex } from "./schema";
import { Tag } from "./constants";
/**
 * @category transaction builder
 */
type TxParamsAccount1Type = TxParamsComplex & {
    tag: Tag.Account;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAccount1 extends TxParamsAccount1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncAccount1Type = TxParamsAsyncComplex & {
    tag: Tag.Account;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncAccount1 extends TxParamsAsyncAccount1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedAccount1Type = TxUnpackedComplex & {
    tag: Tag.Account;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedAccount1 extends TxUnpackedAccount1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAccount2Type = Omit<TxParamsComplex & {
    tag: Tag.Account;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAccount2 extends TxParamsAccount2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncAccount2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Account;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncAccount2 extends TxParamsAsyncAccount2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedAccount2Type = TxUnpackedComplex & {
    tag: Tag.Account;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedAccount2 extends TxUnpackedAccount2Type {
}
/**
 * @category transaction builder
 */
type TxParamsSignedTx1Type = Omit<TxParamsComplex & {
    tag: Tag.SignedTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsSignedTx1 extends TxParamsSignedTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncSignedTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.SignedTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncSignedTx1 extends TxParamsAsyncSignedTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedSignedTx1Type = TxUnpackedComplex & {
    tag: Tag.SignedTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedSignedTx1 extends TxUnpackedSignedTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsSpendTx1Type = Omit<TxParamsComplex & {
    tag: Tag.SpendTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsSpendTx1 extends TxParamsSpendTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncSpendTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.SpendTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncSpendTx1 extends TxParamsAsyncSpendTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedSpendTx1Type = TxUnpackedComplex & {
    tag: Tag.SpendTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedSpendTx1 extends TxUnpackedSpendTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsName1Type = Omit<TxParamsComplex & {
    tag: Tag.Name;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsName1 extends TxParamsName1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncName1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Name;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncName1 extends TxParamsAsyncName1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedName1Type = TxUnpackedComplex & {
    tag: Tag.Name;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedName1 extends TxUnpackedName1Type {
}
/**
 * @category transaction builder
 */
type TxParamsNamePreclaimTx1Type = Omit<TxParamsComplex & {
    tag: Tag.NamePreclaimTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsNamePreclaimTx1 extends TxParamsNamePreclaimTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNamePreclaimTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NamePreclaimTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNamePreclaimTx1 extends TxParamsAsyncNamePreclaimTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNamePreclaimTx1Type = TxUnpackedComplex & {
    tag: Tag.NamePreclaimTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNamePreclaimTx1 extends TxUnpackedNamePreclaimTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsNameClaimTx2Type = Omit<TxParamsComplex & {
    tag: Tag.NameClaimTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsNameClaimTx2 extends TxParamsNameClaimTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNameClaimTx2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NameClaimTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNameClaimTx2 extends TxParamsAsyncNameClaimTx2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNameClaimTx2Type = TxUnpackedComplex & {
    tag: Tag.NameClaimTx;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNameClaimTx2 extends TxUnpackedNameClaimTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsNameUpdateTx1Type = Omit<TxParamsComplex & {
    tag: Tag.NameUpdateTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsNameUpdateTx1 extends TxParamsNameUpdateTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNameUpdateTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NameUpdateTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNameUpdateTx1 extends TxParamsAsyncNameUpdateTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNameUpdateTx1Type = TxUnpackedComplex & {
    tag: Tag.NameUpdateTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNameUpdateTx1 extends TxUnpackedNameUpdateTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsNameTransferTx1Type = Omit<TxParamsComplex & {
    tag: Tag.NameTransferTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsNameTransferTx1 extends TxParamsNameTransferTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNameTransferTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NameTransferTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNameTransferTx1 extends TxParamsAsyncNameTransferTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNameTransferTx1Type = TxUnpackedComplex & {
    tag: Tag.NameTransferTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNameTransferTx1 extends TxUnpackedNameTransferTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsNameRevokeTx1Type = Omit<TxParamsComplex & {
    tag: Tag.NameRevokeTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsNameRevokeTx1 extends TxParamsNameRevokeTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNameRevokeTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NameRevokeTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNameRevokeTx1 extends TxParamsAsyncNameRevokeTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNameRevokeTx1Type = TxUnpackedComplex & {
    tag: Tag.NameRevokeTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNameRevokeTx1 extends TxUnpackedNameRevokeTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsContract1Type = Omit<TxParamsComplex & {
    tag: Tag.Contract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsContract1 extends TxParamsContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncContract1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Contract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncContract1 extends TxParamsAsyncContract1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedContract1Type = TxUnpackedComplex & {
    tag: Tag.Contract;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedContract1 extends TxUnpackedContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsContractCreateTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ContractCreateTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsContractCreateTx1 extends TxParamsContractCreateTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncContractCreateTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ContractCreateTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncContractCreateTx1 extends TxParamsAsyncContractCreateTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedContractCreateTx1Type = TxUnpackedComplex & {
    tag: Tag.ContractCreateTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedContractCreateTx1 extends TxUnpackedContractCreateTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsContractCallTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ContractCallTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsContractCallTx1 extends TxParamsContractCallTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncContractCallTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ContractCallTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncContractCallTx1 extends TxParamsAsyncContractCallTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedContractCallTx1Type = TxUnpackedComplex & {
    tag: Tag.ContractCallTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedContractCallTx1 extends TxUnpackedContractCallTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsContractCall2Type = Omit<TxParamsComplex & {
    tag: Tag.ContractCall;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsContractCall2 extends TxParamsContractCall2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncContractCall2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ContractCall;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncContractCall2 extends TxParamsAsyncContractCall2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedContractCall2Type = TxUnpackedComplex & {
    tag: Tag.ContractCall;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedContractCall2 extends TxUnpackedContractCall2Type {
}
/**
 * @category transaction builder
 */
type TxParamsOracle1Type = Omit<TxParamsComplex & {
    tag: Tag.Oracle;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOracle1 extends TxParamsOracle1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOracle1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Oracle;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOracle1 extends TxParamsAsyncOracle1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOracle1Type = TxUnpackedComplex & {
    tag: Tag.Oracle;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOracle1 extends TxUnpackedOracle1Type {
}
/**
 * @category transaction builder
 */
type TxParamsOracleRegisterTx1Type = Omit<TxParamsComplex & {
    tag: Tag.OracleRegisterTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOracleRegisterTx1 extends TxParamsOracleRegisterTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOracleRegisterTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.OracleRegisterTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOracleRegisterTx1 extends TxParamsAsyncOracleRegisterTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOracleRegisterTx1Type = TxUnpackedComplex & {
    tag: Tag.OracleRegisterTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOracleRegisterTx1 extends TxUnpackedOracleRegisterTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsOracleExtendTx1Type = Omit<TxParamsComplex & {
    tag: Tag.OracleExtendTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOracleExtendTx1 extends TxParamsOracleExtendTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOracleExtendTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.OracleExtendTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOracleExtendTx1 extends TxParamsAsyncOracleExtendTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOracleExtendTx1Type = TxUnpackedComplex & {
    tag: Tag.OracleExtendTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOracleExtendTx1 extends TxUnpackedOracleExtendTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsOracleQueryTx1Type = Omit<TxParamsComplex & {
    tag: Tag.OracleQueryTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOracleQueryTx1 extends TxParamsOracleQueryTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOracleQueryTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.OracleQueryTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOracleQueryTx1 extends TxParamsAsyncOracleQueryTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOracleQueryTx1Type = TxUnpackedComplex & {
    tag: Tag.OracleQueryTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOracleQueryTx1 extends TxUnpackedOracleQueryTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsOracleResponseTx1Type = Omit<TxParamsComplex & {
    tag: Tag.OracleResponseTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOracleResponseTx1 extends TxParamsOracleResponseTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOracleResponseTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.OracleResponseTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOracleResponseTx1 extends TxParamsAsyncOracleResponseTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOracleResponseTx1Type = TxUnpackedComplex & {
    tag: Tag.OracleResponseTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOracleResponseTx1 extends TxUnpackedOracleResponseTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelCreateTx2Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelCreateTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelCreateTx2 extends TxParamsChannelCreateTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelCreateTx2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelCreateTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelCreateTx2 extends TxParamsAsyncChannelCreateTx2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelCreateTx2Type = TxUnpackedComplex & {
    tag: Tag.ChannelCreateTx;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelCreateTx2 extends TxUnpackedChannelCreateTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelCloseMutualTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelCloseMutualTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelCloseMutualTx1 extends TxParamsChannelCloseMutualTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelCloseMutualTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelCloseMutualTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelCloseMutualTx1 extends TxParamsAsyncChannelCloseMutualTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelCloseMutualTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelCloseMutualTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelCloseMutualTx1 extends TxUnpackedChannelCloseMutualTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelCloseSoloTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelCloseSoloTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelCloseSoloTx1 extends TxParamsChannelCloseSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelCloseSoloTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelCloseSoloTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelCloseSoloTx1 extends TxParamsAsyncChannelCloseSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelCloseSoloTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelCloseSoloTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelCloseSoloTx1 extends TxUnpackedChannelCloseSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelSlashTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelSlashTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelSlashTx1 extends TxParamsChannelSlashTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelSlashTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelSlashTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelSlashTx1 extends TxParamsAsyncChannelSlashTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelSlashTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelSlashTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelSlashTx1 extends TxUnpackedChannelSlashTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelDepositTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelDepositTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelDepositTx1 extends TxParamsChannelDepositTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelDepositTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelDepositTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelDepositTx1 extends TxParamsAsyncChannelDepositTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelDepositTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelDepositTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelDepositTx1 extends TxUnpackedChannelDepositTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelWithdrawTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelWithdrawTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelWithdrawTx1 extends TxParamsChannelWithdrawTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelWithdrawTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelWithdrawTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelWithdrawTx1 extends TxParamsAsyncChannelWithdrawTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelWithdrawTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelWithdrawTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelWithdrawTx1 extends TxUnpackedChannelWithdrawTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelSettleTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelSettleTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelSettleTx1 extends TxParamsChannelSettleTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelSettleTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelSettleTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelSettleTx1 extends TxParamsAsyncChannelSettleTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelSettleTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelSettleTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelSettleTx1 extends TxUnpackedChannelSettleTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelForceProgressTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelForceProgressTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelForceProgressTx1 extends TxParamsChannelForceProgressTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelForceProgressTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelForceProgressTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelForceProgressTx1 extends TxParamsAsyncChannelForceProgressTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelForceProgressTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelForceProgressTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelForceProgressTx1 extends TxUnpackedChannelForceProgressTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainTx2Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainTx2 extends TxParamsChannelOffChainTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainTx2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainTx2 extends TxParamsAsyncChannelOffChainTx2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainTx2Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainTx;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainTx2 extends TxUnpackedChannelOffChainTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannel3Type = Omit<TxParamsComplex & {
    tag: Tag.Channel;
    version: 3;
}, "version"> & {
    version?: 3;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannel3 extends TxParamsChannel3Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannel3Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Channel;
    version: 3;
}, "version"> & {
    version?: 3;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannel3 extends TxParamsAsyncChannel3Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannel3Type = TxUnpackedComplex & {
    tag: Tag.Channel;
    version: 3;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannel3 extends TxUnpackedChannel3Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelSnapshotSoloTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelSnapshotSoloTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelSnapshotSoloTx1 extends TxParamsChannelSnapshotSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelSnapshotSoloTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelSnapshotSoloTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelSnapshotSoloTx1 extends TxParamsAsyncChannelSnapshotSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelSnapshotSoloTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelSnapshotSoloTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelSnapshotSoloTx1 extends TxUnpackedChannelSnapshotSoloTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainUpdateTransfer1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainUpdateTransfer;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainUpdateTransfer1 extends TxParamsChannelOffChainUpdateTransfer1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainUpdateTransfer1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainUpdateTransfer;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainUpdateTransfer1 extends TxParamsAsyncChannelOffChainUpdateTransfer1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainUpdateTransfer1Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainUpdateTransfer;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainUpdateTransfer1 extends TxUnpackedChannelOffChainUpdateTransfer1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainUpdateDeposit1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainUpdateDeposit;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainUpdateDeposit1 extends TxParamsChannelOffChainUpdateDeposit1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainUpdateDeposit1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainUpdateDeposit;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainUpdateDeposit1 extends TxParamsAsyncChannelOffChainUpdateDeposit1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainUpdateDeposit1Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainUpdateDeposit;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainUpdateDeposit1 extends TxUnpackedChannelOffChainUpdateDeposit1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainUpdateWithdraw1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainUpdateWithdraw;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainUpdateWithdraw1 extends TxParamsChannelOffChainUpdateWithdraw1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainUpdateWithdraw1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainUpdateWithdraw;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainUpdateWithdraw1 extends TxParamsAsyncChannelOffChainUpdateWithdraw1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainUpdateWithdraw1Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainUpdateWithdraw;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainUpdateWithdraw1 extends TxUnpackedChannelOffChainUpdateWithdraw1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainUpdateCreateContract1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainUpdateCreateContract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainUpdateCreateContract1 extends TxParamsChannelOffChainUpdateCreateContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainUpdateCreateContract1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainUpdateCreateContract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainUpdateCreateContract1 extends TxParamsAsyncChannelOffChainUpdateCreateContract1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainUpdateCreateContract1Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainUpdateCreateContract;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainUpdateCreateContract1 extends TxUnpackedChannelOffChainUpdateCreateContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelOffChainUpdateCallContract1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelOffChainUpdateCallContract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelOffChainUpdateCallContract1 extends TxParamsChannelOffChainUpdateCallContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelOffChainUpdateCallContract1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelOffChainUpdateCallContract;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelOffChainUpdateCallContract1 extends TxParamsAsyncChannelOffChainUpdateCallContract1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelOffChainUpdateCallContract1Type = TxUnpackedComplex & {
    tag: Tag.ChannelOffChainUpdateCallContract;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelOffChainUpdateCallContract1 extends TxUnpackedChannelOffChainUpdateCallContract1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelClientReconnectTx1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelClientReconnectTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelClientReconnectTx1 extends TxParamsChannelClientReconnectTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelClientReconnectTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelClientReconnectTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelClientReconnectTx1 extends TxParamsAsyncChannelClientReconnectTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelClientReconnectTx1Type = TxUnpackedComplex & {
    tag: Tag.ChannelClientReconnectTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelClientReconnectTx1 extends TxUnpackedChannelClientReconnectTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsTreesPoi1Type = Omit<TxParamsComplex & {
    tag: Tag.TreesPoi;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsTreesPoi1 extends TxParamsTreesPoi1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncTreesPoi1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.TreesPoi;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncTreesPoi1 extends TxParamsAsyncTreesPoi1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedTreesPoi1Type = TxUnpackedComplex & {
    tag: Tag.TreesPoi;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedTreesPoi1 extends TxUnpackedTreesPoi1Type {
}
/**
 * @category transaction builder
 */
type TxParamsStateTrees0Type = Omit<TxParamsComplex & {
    tag: Tag.StateTrees;
    version: 0;
}, "version"> & {
    version?: 0;
};
/**
 * @category transaction builder
 */
export interface TxParamsStateTrees0 extends TxParamsStateTrees0Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncStateTrees0Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.StateTrees;
    version: 0;
}, "version"> & {
    version?: 0;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncStateTrees0 extends TxParamsAsyncStateTrees0Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedStateTrees0Type = TxUnpackedComplex & {
    tag: Tag.StateTrees;
    version: 0;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedStateTrees0 extends TxUnpackedStateTrees0Type {
}
/**
 * @category transaction builder
 */
type TxParamsMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.Mtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsMtree1 extends TxParamsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.Mtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncMtree1 extends TxParamsAsyncMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedMtree1Type = TxUnpackedComplex & {
    tag: Tag.Mtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedMtree1 extends TxUnpackedMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsMtreeValue1Type = Omit<TxParamsComplex & {
    tag: Tag.MtreeValue;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsMtreeValue1 extends TxParamsMtreeValue1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncMtreeValue1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.MtreeValue;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncMtreeValue1 extends TxParamsAsyncMtreeValue1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedMtreeValue1Type = TxUnpackedComplex & {
    tag: Tag.MtreeValue;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedMtreeValue1 extends TxUnpackedMtreeValue1Type {
}
/**
 * @category transaction builder
 */
type TxParamsContractsMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.ContractsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsContractsMtree1 extends TxParamsContractsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncContractsMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ContractsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncContractsMtree1 extends TxParamsAsyncContractsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedContractsMtree1Type = TxUnpackedComplex & {
    tag: Tag.ContractsMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedContractsMtree1 extends TxUnpackedContractsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsCallsMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.CallsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsCallsMtree1 extends TxParamsCallsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncCallsMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.CallsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncCallsMtree1 extends TxParamsAsyncCallsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedCallsMtree1Type = TxUnpackedComplex & {
    tag: Tag.CallsMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedCallsMtree1 extends TxUnpackedCallsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsChannelsMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.ChannelsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsChannelsMtree1 extends TxParamsChannelsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncChannelsMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.ChannelsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncChannelsMtree1 extends TxParamsAsyncChannelsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedChannelsMtree1Type = TxUnpackedComplex & {
    tag: Tag.ChannelsMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedChannelsMtree1 extends TxUnpackedChannelsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsNameserviceMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.NameserviceMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsNameserviceMtree1 extends TxParamsNameserviceMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncNameserviceMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.NameserviceMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncNameserviceMtree1 extends TxParamsAsyncNameserviceMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedNameserviceMtree1Type = TxUnpackedComplex & {
    tag: Tag.NameserviceMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedNameserviceMtree1 extends TxUnpackedNameserviceMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsOraclesMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.OraclesMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsOraclesMtree1 extends TxParamsOraclesMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncOraclesMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.OraclesMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncOraclesMtree1 extends TxParamsAsyncOraclesMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedOraclesMtree1Type = TxUnpackedComplex & {
    tag: Tag.OraclesMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedOraclesMtree1 extends TxUnpackedOraclesMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAccountsMtree1Type = Omit<TxParamsComplex & {
    tag: Tag.AccountsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAccountsMtree1 extends TxParamsAccountsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncAccountsMtree1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.AccountsMtree;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncAccountsMtree1 extends TxParamsAsyncAccountsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedAccountsMtree1Type = TxUnpackedComplex & {
    tag: Tag.AccountsMtree;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedAccountsMtree1 extends TxUnpackedAccountsMtree1Type {
}
/**
 * @category transaction builder
 */
type TxParamsGaAttachTx1Type = Omit<TxParamsComplex & {
    tag: Tag.GaAttachTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsGaAttachTx1 extends TxParamsGaAttachTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncGaAttachTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.GaAttachTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncGaAttachTx1 extends TxParamsAsyncGaAttachTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedGaAttachTx1Type = TxUnpackedComplex & {
    tag: Tag.GaAttachTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedGaAttachTx1 extends TxUnpackedGaAttachTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsGaMetaTx2Type = Omit<TxParamsComplex & {
    tag: Tag.GaMetaTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsGaMetaTx2 extends TxParamsGaMetaTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncGaMetaTx2Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.GaMetaTx;
    version: 2;
}, "version"> & {
    version?: 2;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncGaMetaTx2 extends TxParamsAsyncGaMetaTx2Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedGaMetaTx2Type = TxUnpackedComplex & {
    tag: Tag.GaMetaTx;
    version: 2;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedGaMetaTx2 extends TxUnpackedGaMetaTx2Type {
}
/**
 * @category transaction builder
 */
type TxParamsPayingForTx1Type = Omit<TxParamsComplex & {
    tag: Tag.PayingForTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsPayingForTx1 extends TxParamsPayingForTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncPayingForTx1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.PayingForTx;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncPayingForTx1 extends TxParamsAsyncPayingForTx1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedPayingForTx1Type = TxUnpackedComplex & {
    tag: Tag.PayingForTx;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedPayingForTx1 extends TxUnpackedPayingForTx1Type {
}
/**
 * @category transaction builder
 */
type TxParamsGaMetaTxAuthData1Type = Omit<TxParamsComplex & {
    tag: Tag.GaMetaTxAuthData;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsGaMetaTxAuthData1 extends TxParamsGaMetaTxAuthData1Type {
}
/**
 * @category transaction builder
 */
type TxParamsAsyncGaMetaTxAuthData1Type = Omit<TxParamsAsyncComplex & {
    tag: Tag.GaMetaTxAuthData;
    version: 1;
}, "version"> & {
    version?: 1;
};
/**
 * @category transaction builder
 */
export interface TxParamsAsyncGaMetaTxAuthData1 extends TxParamsAsyncGaMetaTxAuthData1Type {
}
/**
 * @category transaction builder
 */
type TxUnpackedGaMetaTxAuthData1Type = TxUnpackedComplex & {
    tag: Tag.GaMetaTxAuthData;
    version: 1;
};
/**
 * @category transaction builder
 */
export interface TxUnpackedGaMetaTxAuthData1 extends TxUnpackedGaMetaTxAuthData1Type {
}
/**
 * @category transaction builder
 */
export type TxParams = TxParamsAccount1 | TxParamsAccount2 | TxParamsSignedTx1 | TxParamsSpendTx1 | TxParamsName1 | TxParamsNamePreclaimTx1 | TxParamsNameClaimTx2 | TxParamsNameUpdateTx1 | TxParamsNameTransferTx1 | TxParamsNameRevokeTx1 | TxParamsContract1 | TxParamsContractCreateTx1 | TxParamsContractCallTx1 | TxParamsContractCall2 | TxParamsOracle1 | TxParamsOracleRegisterTx1 | TxParamsOracleExtendTx1 | TxParamsOracleQueryTx1 | TxParamsOracleResponseTx1 | TxParamsChannelCreateTx2 | TxParamsChannelCloseMutualTx1 | TxParamsChannelCloseSoloTx1 | TxParamsChannelSlashTx1 | TxParamsChannelDepositTx1 | TxParamsChannelWithdrawTx1 | TxParamsChannelSettleTx1 | TxParamsChannelForceProgressTx1 | TxParamsChannelOffChainTx2 | TxParamsChannel3 | TxParamsChannelSnapshotSoloTx1 | TxParamsChannelOffChainUpdateTransfer1 | TxParamsChannelOffChainUpdateDeposit1 | TxParamsChannelOffChainUpdateWithdraw1 | TxParamsChannelOffChainUpdateCreateContract1 | TxParamsChannelOffChainUpdateCallContract1 | TxParamsChannelClientReconnectTx1 | TxParamsTreesPoi1 | TxParamsStateTrees0 | TxParamsMtree1 | TxParamsMtreeValue1 | TxParamsContractsMtree1 | TxParamsCallsMtree1 | TxParamsChannelsMtree1 | TxParamsNameserviceMtree1 | TxParamsOraclesMtree1 | TxParamsAccountsMtree1 | TxParamsGaAttachTx1 | TxParamsGaMetaTx2 | TxParamsPayingForTx1 | TxParamsGaMetaTxAuthData1;
/**
 * @category transaction builder
 */
export type TxParamsAsync = TxParamsAsyncAccount1 | TxParamsAsyncAccount2 | TxParamsAsyncSignedTx1 | TxParamsAsyncSpendTx1 | TxParamsAsyncName1 | TxParamsAsyncNamePreclaimTx1 | TxParamsAsyncNameClaimTx2 | TxParamsAsyncNameUpdateTx1 | TxParamsAsyncNameTransferTx1 | TxParamsAsyncNameRevokeTx1 | TxParamsAsyncContract1 | TxParamsAsyncContractCreateTx1 | TxParamsAsyncContractCallTx1 | TxParamsAsyncContractCall2 | TxParamsAsyncOracle1 | TxParamsAsyncOracleRegisterTx1 | TxParamsAsyncOracleExtendTx1 | TxParamsAsyncOracleQueryTx1 | TxParamsAsyncOracleResponseTx1 | TxParamsAsyncChannelCreateTx2 | TxParamsAsyncChannelCloseMutualTx1 | TxParamsAsyncChannelCloseSoloTx1 | TxParamsAsyncChannelSlashTx1 | TxParamsAsyncChannelDepositTx1 | TxParamsAsyncChannelWithdrawTx1 | TxParamsAsyncChannelSettleTx1 | TxParamsAsyncChannelForceProgressTx1 | TxParamsAsyncChannelOffChainTx2 | TxParamsAsyncChannel3 | TxParamsAsyncChannelSnapshotSoloTx1 | TxParamsAsyncChannelOffChainUpdateTransfer1 | TxParamsAsyncChannelOffChainUpdateDeposit1 | TxParamsAsyncChannelOffChainUpdateWithdraw1 | TxParamsAsyncChannelOffChainUpdateCreateContract1 | TxParamsAsyncChannelOffChainUpdateCallContract1 | TxParamsAsyncChannelClientReconnectTx1 | TxParamsAsyncTreesPoi1 | TxParamsAsyncStateTrees0 | TxParamsAsyncMtree1 | TxParamsAsyncMtreeValue1 | TxParamsAsyncContractsMtree1 | TxParamsAsyncCallsMtree1 | TxParamsAsyncChannelsMtree1 | TxParamsAsyncNameserviceMtree1 | TxParamsAsyncOraclesMtree1 | TxParamsAsyncAccountsMtree1 | TxParamsAsyncGaAttachTx1 | TxParamsAsyncGaMetaTx2 | TxParamsAsyncPayingForTx1 | TxParamsAsyncGaMetaTxAuthData1;
/**
 * @category transaction builder
 */
export type TxUnpacked = TxUnpackedAccount1 | TxUnpackedAccount2 | TxUnpackedSignedTx1 | TxUnpackedSpendTx1 | TxUnpackedName1 | TxUnpackedNamePreclaimTx1 | TxUnpackedNameClaimTx2 | TxUnpackedNameUpdateTx1 | TxUnpackedNameTransferTx1 | TxUnpackedNameRevokeTx1 | TxUnpackedContract1 | TxUnpackedContractCreateTx1 | TxUnpackedContractCallTx1 | TxUnpackedContractCall2 | TxUnpackedOracle1 | TxUnpackedOracleRegisterTx1 | TxUnpackedOracleExtendTx1 | TxUnpackedOracleQueryTx1 | TxUnpackedOracleResponseTx1 | TxUnpackedChannelCreateTx2 | TxUnpackedChannelCloseMutualTx1 | TxUnpackedChannelCloseSoloTx1 | TxUnpackedChannelSlashTx1 | TxUnpackedChannelDepositTx1 | TxUnpackedChannelWithdrawTx1 | TxUnpackedChannelSettleTx1 | TxUnpackedChannelForceProgressTx1 | TxUnpackedChannelOffChainTx2 | TxUnpackedChannel3 | TxUnpackedChannelSnapshotSoloTx1 | TxUnpackedChannelOffChainUpdateTransfer1 | TxUnpackedChannelOffChainUpdateDeposit1 | TxUnpackedChannelOffChainUpdateWithdraw1 | TxUnpackedChannelOffChainUpdateCreateContract1 | TxUnpackedChannelOffChainUpdateCallContract1 | TxUnpackedChannelClientReconnectTx1 | TxUnpackedTreesPoi1 | TxUnpackedStateTrees0 | TxUnpackedMtree1 | TxUnpackedMtreeValue1 | TxUnpackedContractsMtree1 | TxUnpackedCallsMtree1 | TxUnpackedChannelsMtree1 | TxUnpackedNameserviceMtree1 | TxUnpackedOraclesMtree1 | TxUnpackedAccountsMtree1 | TxUnpackedGaAttachTx1 | TxUnpackedGaMetaTx2 | TxUnpackedPayingForTx1 | TxUnpackedGaMetaTxAuthData1;
export {};
