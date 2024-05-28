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
The Aeternity Wallet Snap is a MetaMask extension that has Aeternity capabilities such as public key derivation, transaction signing, message signing.

## Starting the snap

Install the latest version of the Snaps CLI

```bash
yarn add @metamask/snaps-cli
```

Install the dependencies

```bash
yarn install
```

Build and start the local development server

```bash
yarn dev
```

## Using the snap

The locally started snap is available as Snap ID `local:http://localhost:8080`.

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

**The plugin does not return the private key** of your aeternity account to a third-party application.

### 👀 Full transparency

Thanks to the preview of incoming transactions, you know exactly what you are signing. Without your consent, **no third party application will receive your public key.**
