export function sha256hash(input: Uint8Array | string): Buffer {
  return new Sha256().update(input).digest();
}

// remove after dropping webpack4 support
const isWebpack4Buffer = (() => {
  try {
    Buffer.concat([Uint8Array.from([])]);
    return false;
  } catch (error) {
    return true;
  }
})();

const getChecksum = (payload: Uint8Array): Buffer =>
  sha256hash(sha256hash(payload)).slice(0, 4);

export const concatBuffers = isWebpack4Buffer
  ? (list: readonly Uint8Array[], totalLength?: number): Buffer =>
      Buffer.concat(
        list.map((el) => Buffer.from(el)),
        totalLength,
      )
  : Buffer.concat;

const addChecksum = (payload: Uint8Array): Buffer =>
  concatBuffers([payload, getChecksum(payload)]);

function getPayload(buffer: Buffer): Buffer {
  const payload = buffer.slice(0, -4);
  // if (!getChecksum(payload).equals(buffer.slice(-4))) throw new InvalidChecksumError();
  return payload;
}
