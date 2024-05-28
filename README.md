# Aeternity Protocol Snap

# FAQ

### What is the Aeternity Wallet Snap?

The Aeternity Wallet Snap is a MetaMask extension that enables secure account management and transaction signing for the Aeternity blockchain.

### How do I install the Aeternity Wallet Snap?

You can install the Snap by adding it via MetaMask settings and running it locally. For detailed instructions, refer to the Installation section of this README.

### Is the Aeternity Wallet Snap secure?

Yes, the Snap ensures that your private key never leaves the plugin, and it provides a transparent preview of transactions before you sign them.

### Where can I find the demo?

You can access the demo for testnet/mainnet at [Aeternity Snap Demo](https://aeternity-snap.vercel.io).

### How do I contribute to the project?

Contributions are welcome! Please open an issue or submit a pull request with any improvements.

### Where can I find the npm package?

The npm package can be installed using:

```bash
npm install @aeternity-snap/plugin
```

**Manage account and sign transactions for Aeternity Protocol blockchain.**

**Add Snap:** https://aeternity-snap.vercel.app/

# Important

To use this dapp you need to install [Metamask Flask](https://metamask.io/flask/). This version of metamask needs to be installed in a separate browser which doesn't have the regular Metamask installed.

🔄 Metamask doesn't automatically offer to install the new version, you need to do it manually:

1. Open metamask
2. Settings
3. Snaps
4. Select Aeternity Snap
5. Remove

**Demo (testnet/mainnet):** https://aeternity-snap.vercel.app/

### Get Started

Install dependencies

```bash
yarn install
```

Start snap and frontend

```bash
yarn dev
```

Snap is located at `localhost:8080` and frontend is located at `localhost:3000`

### How it works:

The `@aeternity-snap/plugin` itself does not have internet access. The plugin only signs transactions and provides an interface for viewing actions signed by the user.

### ⚡️ Plugin features:

- Connect to dapp
- Sign transaction
- Sign message

### 🔒 Safe and secure.

The plugin does not return the private key of your aeternity account to a third-party application.

### 👀 Full transparency

Thanks to the preview of incoming transactions, you know exactly what you are signing. Without your consent, **no third party application will receive your public key.**

### @aeternity-snap/sdk

Interact with Aeternity Snap using the SDK, it's the easiest way to give Metamask users access to the world of Aeternity Protocol

```ts
import { AESnap, NetworkId } from "@aeternity-snap/sdk";
import { Encoding, Tag, encode } from "@aeternity/aepp-sdk";
import { TxParamsAsync } from "@aeternity/aepp-sdk/es/tx/builder/schema";

// Install snap and connect wallet
const snap = await AESnap.connect(NetworkId.testnet, {
  id: "local:http://localhost:8080",
});

// Get public key
const response = await snap?.getPublicKey();
console.log(response.publicKey ?? "No public key");

// Send transaction
const results = await snap.signAndSendTransaction({
  tag: Tag.SpendTx,
  senderId: "",
  recipientId: "",
  amount: 0.1 * 10 ** 18,
  payload: encode(new TextEncoder().encode(""), Encoding.Bytearray),
} as TxParamsAsync);
```
