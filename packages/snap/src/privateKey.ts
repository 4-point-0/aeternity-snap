import nacl from "tweetnacl";
import { SLIP10Node } from "@metamask/key-tree";
import { assertInput, assertIsArray } from "./utils";

const isValidSegment = (segment: any) => {
  if (typeof segment !== "string") {
    return false;
  }

  if (!segment.match(/^[0-9]+'$/)) {
    return false;
  }

  const index = segment.slice(0, -1);

  if (parseInt(index).toString() !== index) {
    return false;
  }

  return true;
};

export const deriveKeyPair = async (path: any) => {
  assertIsArray(path);
  assertInput(path.length);
  assertInput(path.every((segment: any) => isValidSegment(segment)));

  const rootNode = await snap.request({
    method: "snap_getBip32Entropy",
    params: {
      path: [`m`, `44'`, `457'`],
      curve: "ed25519",
    },
  });

  const node = await SLIP10Node.fromJSON(rootNode);

  const keypair = await node.derive(
    path.map((segment: any) => `slip10:${segment}`)
  );

  return nacl.sign.keyPair.fromSeed(keypair.privateKeyBytes!);
};
