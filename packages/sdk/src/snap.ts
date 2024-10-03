import { AeSdk, Node } from "@aeternity/aepp-sdk";
import { NetworkId, getNetworkRpcUrl, networks } from "./constants";
import AeSnapProvider from "./provider";
import { AeSnapStatus, Maybe } from "./types";

class AeSnap {
  readonly id: string = "local:http://localhost:8080";

  readonly provider: AeSnapProvider;

  private aeSdk: AeSdk;

  private networkId: NetworkId;

  private constructor(
    network_id: NetworkId,
    options?: { id: string; provider?: AeSnapProvider },
  ) {
    this.provider = options?.provider ?? new AeSnapProvider();
    this.id = options?.id ?? "npm:@aeternity-snap/plugin";
    this.networkId = network_id;

    const node = new Node(getNetworkRpcUrl(network_id));
    this.aeSdk = new AeSdk({
      nodes: [{ name: networks[network_id].name, instance: node }],
      accounts: [],
    });
  }

  static async connect(
    networkId: NetworkId,
    options?: { id: string; provider?: AeSnapProvider },
  ): Promise<AeSnap> {
    const snap = new AeSnap(networkId, options);

    const status = await snap.getStatus();
    if (status === AeSnapStatus.NOT_SUPPORTED) {
      throw Error("You need install Metamask no lower than version 11");
    }

    if (status === AeSnapStatus.NOT_INSTALLED) {
      await snap.install();
    }

    return snap;
  }

  get isLocal() {
    return this.id.startsWith("local:");
  }

  async getStatus() {
    const isAvailable = await this.provider.isSnapsAvailable();
    if (!isAvailable) {
      return AeSnapStatus.NOT_SUPPORTED;
    }

    const snap = await this.provider.getSnap(this.id);
    return snap ? AeSnapStatus.INSTALLED : AeSnapStatus.NOT_INSTALLED;
  }

  async install() {
    await this.provider.connectSnap(this.id);
  }

  async getPublicKey(): Promise<Maybe<{ publicKey: string }>> {
    return await this.provider.invokeSnap(this.id, "getPublicKey", {
      derivationPath: [`0'`, `0'`, `0'`],
    });
  }

  async signMessage(
    message: string,
  ): Promise<Maybe<{ publicKey: string; signature: string }>> {
    return await this.provider.invokeSnap(this.id, "signMessage", {
      derivationPath: [`0'`, `0'`, `0'`],
      message,
    });
  }

  public async signAndSendTransaction(transaction: any): Promise<string> {
    try {
      const tx = await this.aeSdk.buildTx(transaction);
      const response: Maybe<{ publicKey: string; signedTx: string }> =
        await this.provider.invokeSnap(this.id, "signTransaction", {
          derivationPath: [`0'`, `0'`, `0'`],
          tx,
          networkId: networks[this.networkId].id,
        });

      if (!response?.signedTx) {
        throw new Error("Metamask Near Snap did not return signed transaction");
      }

      const { txHash } = await this.aeSdk.api.postTransaction({
        tx: response.signedTx,
      });

      return txHash;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(
          `Problem signing transaction: ${err.message}` || err.message,
        );
      } else {
        throw err;
      }
    }
  }
}

export default AeSnap;
