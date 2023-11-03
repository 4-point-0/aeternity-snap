import { AeSdk, Node } from '@aeternity/aepp-sdk/es';
import { TxParamsAsync } from '@aeternity/aepp-sdk/es/tx/builder/schema';

class AeSnap {
  private aeSdk: AeSdk;

  private snapId: string;

  constructor() {
    const node = new Node('https://testnet.aeternity.io');
    this.aeSdk = new AeSdk({
      nodes: [{ name: 'testnet', instance: node }],
      accounts: [],
    });
    this.snapId = `local:${'http://localhost:8080'}`;
  }

  private async requestEthereum(method: string, params: any): Promise<any> {
    return window.ethereum.request({ method, params });
  }

  public async connectAccount(): Promise<void> {
    try {
      await this.requestEthereum('wallet_requestSnaps', {
        [this.snapId]: {},
      });
      await this.getPubkey();
    } catch (err) {
      console.error(err);
      throw new Error(`Problem connecting account: ${err.message}` || err);
    }
  }

  public async signMessage(message: string): Promise<any> {
    try {
      const response = await this.requestEthereum('wallet_invokeSnap', {
        snapId: this.snapId,
        request: {
          method: 'signMessage',
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

  public async signTransaction(payload: TxParamsAsync): Promise<string> {
    try {
      const tx = await this.aeSdk.buildTx(payload);
      const response = await this.requestEthereum('wallet_invokeSnap', {
        snapId: this.snapId,
        request: {
          method: 'signTransaction',
          params: {
            derivationPath: [`0'`, `0'`, `0'`],
            tx,
            networkId: 'ae_uat',
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

  private async getPubkey(): Promise<string> {
    try {
      const response = await this.requestEthereum('wallet_invokeSnap', {
        snapId: this.snapId,
        request: {
          method: 'getPublicKey',
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
}

export default AeSnap;
