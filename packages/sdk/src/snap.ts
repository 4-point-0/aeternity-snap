import { AeSdk, Node } from "@aeternity/aepp-sdk/es";
import { TxParamsAsync } from "@aeternity/aepp-sdk/es/tx/builder/schema";
import { networks, NetworkId, getNetworkRpcUrl } from "./constants";

class AeSnap {
  private aeSdk: AeSdk;
  private snapId: string;

  constructor(network: NetworkId) {
    const node = new Node(getNetworkRpcUrl(network));
    this.aeSdk = new AeSdk({
      nodes: [{ name: networks[network].name, instance: node }],
      accounts: [],
    });
    this.snapId = `local:${"http://localhost:8080"}`;
  }

  public static async isSnapInstalled(): Promise<boolean> {
    try {
      const result = await window.ethereum.request({
        method: "wallet_getSnaps",
      });
      return result
        ? result.hasOwnProperty("local:http://localhost:8080")
        : false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public static async connect(network: NetworkId): Promise<AeSnap> {
    const aeSnap = new AeSnap(network);
    await aeSnap.connectAccount();
    return aeSnap;
  }

  private async connectAccount(): Promise<void> {
    try {
      await this.requestEthereum("wallet_requestSnaps", {
        [this.snapId]: {},
      });
      await this.getPublicKey();
    } catch (err) {
      console.error(err);
      throw new Error(`Problem connecting account: ${err.message}` || err);
    }
  }

  private async requestEthereum(method: string, params: any): Promise<any> {
    return window.ethereum.request({ method, params });
  }

  public async getPublicKey(): Promise<string> {
    try {
      const response = await this.requestEthereum("wallet_invokeSnap", {
        snapId: this.snapId,
        request: {
          method: "getPublicKey",
          params: {
            derivationPath: [`0'`, `0'`, `0'`],
            confirm: true,
          },
        },
      });
      return response.pubkey;
    } catch (err) {
      console.error(err);
      throw new Error(`Problem getting public key: ${err.message}` || err);
    }
  }

  public async signMessage(message: string): Promise<any> {
    try {
      const response = await this.requestEthereum("wallet_invokeSnap", {
        snapId: this.snapId,
        request: {
          method: "signMessage",
          params: {
            derivationPath: [`0'`, `0'`, `0'`],
            message,
          },
        },
      });
      return response;
    } catch (err) {
      console.error(err);
      throw new Error(`Problem signing message: ${err.message}` || err);
    }
  }

  public async signAndSendTransaction(
    transaction: TxParamsAsync,
  ): Promise<string> {
    try {
      const tx = await this.aeSdk.buildTx(transaction);
      const response = await this.requestEthereum("wallet_invokeSnap", {
        snapId: this.snapId,
        request: {
          method: "signTransaction",
          params: {
            derivationPath: [`0'`, `0'`, `0'`],
            tx,
            networkId: networks[NetworkId.testnet].id,
          },
        },
      });

      const { txHash } = await this.aeSdk.api.postTransaction({
        tx: response.signedTx,
      });

      return txHash;
    } catch (err) {
      console.error(err);
      throw new Error(`Problem signing transaction: ${err.message}` || err);
    }
  }
}

export default AeSnap;
