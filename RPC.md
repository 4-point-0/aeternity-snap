# RPC Methods

### getPublicKey

Returns the wallet's public key encoded with bs58Encode function and `ak_` prefix.

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
    snapId,
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

### signMessage

Sign a message (can be either arbitrary bytes or a UTF-8 string) and return the signature encoded as Base64.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/457'
- `message` - Message encoded as Base64

#### Returns

An object containing:

- `publicKey` - `ak_` + Base58 encoded public key
- `signature` - Message signature encoded as Base64

Example:

```javascript
const bytes = new TextEncoder().encode("Lorem ipsum");
const base64Message = base64js.fromByteArray(bytes);

ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId,
    request: {
      method: "signMessage",
      params: {
        derivationPath: [`0'`, `0'`, `0'`],
        message: base64Message,
      },
    },
  },
});
```

### signTransaction

Sign a transaction and return the signature encoded as Base64.

#### Parameters

An object containing:

- `derivationPath` - Derivation paths segments that will be appended to m/44'/457'
- `message` - Transaction message encoded as Base64

#### Returns

An object containing:

- `publicKey` - `ak_` + Base58 encoded public key
- `signature` - Transaction signature encoded as Base64

Example:

```javascript
ethereum.request({
  method: "wallet_invokeSnap",
  params: {
    snapId,
    request: {
      method: "signTransaction",
      params: {
        derivationPath: [`0'`, `0'`, `0'`],
        message: "...",
      },
    },
  },
});
```
