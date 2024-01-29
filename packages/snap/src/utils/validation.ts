import { Encoding } from "./encoder";
import { isKeyOfObject } from "./other";

function ensureValidLength(data: Uint8Array, type: Encoding): void {
  if (!isKeyOfObject(type, byteSizeForType)) return;
  const reqLen = byteSizeForType[type];
  if (reqLen == null || data.length === reqLen) return;
  // throw new PayloadLengthError(`Payload should be ${reqLen} bytes, got ${data.length} instead`);
}

const parseType = (maybeType: unknown): [Encoding, typeof base64] => {
  const base64Type = base64Types.find((t: any) => t === maybeType);
  if (base64Type != null) return [base64Type, base64];
  const base58Type = base58Types.find((t: any) => t === maybeType);
  if (base58Type != null) return [base58Type, base58];
  // throw new ArgumentError('prefix', `one of ${[...base58Types, ...base64Types].join(', ')}`, maybeType);
};
