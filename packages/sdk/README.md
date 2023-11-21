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
