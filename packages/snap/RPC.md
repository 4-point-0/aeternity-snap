# RPC Methods

### getPublicKey

Returns the wallet's public key encoded as aeternity Base58.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/457'
- `confirm` - Whether to show a confirm dialog.

#### Returns

Base58 encoded public key.

Example:

```javascript
ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId: "snapId",
    request: {
      method: "getPublicKey",
      params: {
        derivationPath: [`0'`, `0'`, `0'`],
        confirm: true,
      },
    },
  },
});
```

### signTransaction

Sign a transaction and return the signature.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/501'
- `tx` - Tx hash string built with buildTx method from SDK
- `networkId` - Network that's used `mainnet`, `testnet` etc
- `isInnerTx` - Boolean parameter to check for inner tx

derivationPath, tx, networkId, isInnerTx

#### Returns

An object containing:

- `publicKey` - Aeternity Base58 encoded public key
- `signature` - Encoded transaction signature

Example:

```javascript
ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId: "snapId",
    request: {
      method: "signTransaction",
      params: {
        derivationPath: [`0'`, `0'`, `0'`],
        tx: "tx_123",
        networkId: "ae_uat",
        innerTx: true,
        },
      },
    },
  },
});
```

### signMessage

Sign a message (can be either arbitrary bytes or a UTF-8 string) and return the signature encoded as Base58.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/501'
- `message` - Message encoded as Base58

#### Returns

An object containing:

- `publicKey` - Base58 encoded public key
- `signature` - Message signature encoded as Base58

Example:

```javascript
const bytes = new TextEncoder().encode("Lorem ipsum");
const base58Message = base58.encode(bytes);

ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId: "snapId,
    request: {
      method: "signMessage",
      params: {
        derivationPath: [`0'`, `0'`,`0'`],
        message: base58Message,
      },
    },
  },
});
```
