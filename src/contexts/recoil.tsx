import { atom } from "recoil";

export const connectedWalletState = atom({
  key: "connectedWalletState",
  default: "",
});

export const walletAddressState = atom({
  key: "walletAddressState",
  default: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
});

export const transactionsState = atom({
  key: "transactionsState",
  default: [],
});
