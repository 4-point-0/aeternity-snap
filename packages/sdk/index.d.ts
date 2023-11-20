/* eslint-disable*/
import { MetaMaskInpageProvider } from "@metamask/providers";

/*
 * Window type extension to support ethereum
 */
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

export * from "./src/constants";
export { default as AeSnapProvider } from "./src/provider";
export { default as AESnap } from "./src/snap";
export * from "./src/types";
