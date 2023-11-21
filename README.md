# Aeternity Protocol Snap

**Manage account and sign transactions for Aeternity Protocol blockchain.**

**Add Snap:** https://aeternity-snap.vercel.io

🔄 Metamask doesn't automatically offer to install the new version, you need to do it manually:

1. Open metamask
2. Settings
3. Snaps
4. Select Aeternity Snap
5. Remove

**Demo (testnet/mainnet):** https://aeternity-snap.vercel.io

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

**The plugin does not have access to the Internet**, and also **does not return the private key** of your aeternity account to a third-party application.

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
