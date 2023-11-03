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

TODO

### ☑️ Details of what the user is signing.

List of transaction actions, confirmations of new permissions, additional information. Unfortunately at the moment snap-ui is not very rich, but we are doing our best to make the UI/UX of the plugin better for the user.

### 🔒 Safe and secure.

**The plugin does not have access to the Internet**, and also **does not return the private key** of your aeternity account to a third-party application.

### 👀 Full transparency

Thanks to the preview of incoming transactions, you know exactly what you are signing. Without your consent, **no third party application will receive your public key.**

### @aeternity-snap/sdk

Interact with Aeternity Snap using the js library, it's the easiest way to give Metamask users access to the world of Aeternity Protocol

```ts
import { AeternitySnapAccount } from '@aeternity-snap/sdk';

// Install snap and connect wallet
const account = await AeternitySnapAccount.connect('mainnet');

const results = await account.signAndSendTransaction({
  tag: Tag.SpendTx,
  senderId: address,
  recipientId: recipient,
  amount: 0.1 * 10 ** 18,
  payload: encode(new TextEncoder().encode(''), Encoding.Bytearray),
});
```
