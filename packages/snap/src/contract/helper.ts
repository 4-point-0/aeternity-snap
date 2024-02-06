import { BytecodeContractCallEncoder } from "@aeternity/aepp-calldata";
import { AE_AMOUNT_FORMATS, formatAmount } from "../utils/amount-formatter";
import {
  TxContractCallDto,
  TxContractCallEncodedDto,
  TxEncodedDto,
  TxSpendDto,
} from "../common/types";
import {
  AeDecodedCallData,
  TxArguments,
  TxFunctionRaw,
  TxParams,
  getNetworkRpcUrl,
} from "./types";

export const fetchJson = async (url: string): Promise<any> => {
  const response = await fetch(url);
  console.log("response", response);
  if (response.status === 204) {
    return null;
  }
  return response.json();
};

export const getContractCallInfo = async (
  networkId: string,
  callData?: string,
  contractId?: string,
): Promise<TxParams | null> => {
  if (callData || contractId) {
    try {
      const result = await fetch(
        `${getNetworkRpcUrl(networkId)}/v3/contracts/${contractId}/code`,
      );
      const resultJson = await result.json();
      if (!resultJson?.bytecode) return null;

      const byteEncoder = new BytecodeContractCallEncoder(resultJson.bytecode);

      const decodedCallData: AeDecodedCallData | undefined =
        byteEncoder.decodeCall(callData as any) as any;
      if (!decodedCallData) return null;

      const txParams = {
        function: decodedCallData.functionName as TxFunctionRaw,
        arguments: decodedCallData.args.map((arg: any) => ({
          type: Array.isArray(arg) ? "list" : "any",
          value: Array.isArray(arg)
            ? arg.map((element) => ({ value: element }))
            : arg,
        })) as TxArguments[],
      };

      return txParams;
    } catch (e) {
      console.error(e);
    }
  }
  return null;
};

export const getCoingeckoPrice = async (
  ids: string[],
  currency: string,
): Promise<any> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
      ",",
    )}&vs_currencies=${currency}`,
  );
  return response.json();
};

export const getFeeInUsd = async (
  fee: string | number | bigint | any,
): Promise<number> => {
  try {
    const price = await getCoingeckoPrice(["aeternity"], "usd");

    if (!price?.aeternity) return 0;
    const formattedFee = formatAmount(fee, {
      denomination: AE_AMOUNT_FORMATS.AETTOS,
      targetDenomination: AE_AMOUNT_FORMATS.AE,
    });

    return Number(formattedFee) * Number(price.aeternity.usd);
  } catch (e) {
    console.error(e);
  }
  return 0;
};

export const getContractCallDetails = async (
  encodedTx: TxEncodedDto,
  networkId: string,
): Promise<TxContractCallDto> => {
  try {
    const {
      callerId,
      callData,
      fee,
      contractId,
      nonce,
    }: TxContractCallEncodedDto = encodedTx as TxContractCallEncodedDto;

    const txParams = await getContractCallInfo(networkId, callData, contractId);

    const feeInUsd = await getFeeInUsd(fee ?? 0);
    return {
      callerId,
      fee: formatAmount(fee || 0, {
        denomination: AE_AMOUNT_FORMATS.AETTOS,
        targetDenomination: AE_AMOUNT_FORMATS.AE,
      }),
      feeInUsd: feeInUsd < 0.01 ? "< $0.01" : feeInUsd.toFixed(2),
      function: txParams?.function,
      args: txParams?.arguments,
      callData,
      contractId,
      nonce: nonce?.toString(),
    };
  } catch (e) {
    console.log(e);
  }
  return {};
};

export const getSpendTxDetails = async (
  dto: TxSpendDto,
): Promise<TxSpendDto> => {
  try {
    const { fee, senderId, recipientId, amount, nonce }: TxSpendDto =
      dto as TxSpendDto;
    const price = await getCoingeckoPrice(["aeternity"], "usd");
    const formattedFee = formatAmount(fee || 0, {
      denomination: AE_AMOUNT_FORMATS.AETTOS,
      targetDenomination: AE_AMOUNT_FORMATS.AE,
    });

    const feeInUsd = Number(formattedFee) * Number(price.aeternity.usd);
    return {
      senderId,
      recipientId,
      amount: (Number(amount?.toString()) / 10 ** 18).toString(),
      fee: formatAmount(fee || 0, {
        denomination: AE_AMOUNT_FORMATS.AETTOS,
        targetDenomination: AE_AMOUNT_FORMATS.AE,
      }),
      feeInUsd: feeInUsd < 0.01 ? "< $0.01" : feeInUsd.toFixed(2),
      nonce: nonce ?? 0,
    };
  } catch (e) {
    console.log(e);
  }
  return {};
};
