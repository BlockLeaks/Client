import { encodeAbiParameters } from "viem";

export const signMessage = (account: string) => {
  return encodeAbiParameters(
    [{ type: "address", name: "airdropAddress" }],
    [account as `0x${string}`]
  );
};

export function handleVerifyErrors(e: any): any {
  // else if the tx is invalid, we show an error message
  // it is either because the proof is invalid or because the user already claimed the airdrop
  console.log("error", { ...(e as object) });
  console.log("e.shortMessage", (e as { shortMessage: string }).shortMessage);
  let returnedError: string = (e as { shortMessage: string }).shortMessage;

  if (
    (e as { shortMessage: string }).shortMessage ===
    'Encoded error signature "0x587110c0" not found on ABI.\nMake sure you are using the correct ABI and that the error exists on it.\nYou can look up the signature here: https://openchain.xyz/signatures?query=0x587110c0.'
  ) {
    returnedError =
      "The address used to claim the airdrop is different from the one that has been signed in the user Vault.\nClick on the 'Back Home' button on the top left to retry the process.";
  }

  if (
    (e as { shortMessage: string }).shortMessage ===
    'Encoded error signature "0x2a2172c9" not found on ABI.\nMake sure you are using the correct ABI and that the error exists on it.\nYou can look up the signature here: https://openchain.xyz/signatures?query=0x2a2172c9.'
  ) {
    returnedError =
      "The registry root is not the same in the proof and in the AvailableRegistryRoot contract. Please relaunch the frontend and try again. If you experiment this error again, please contact us on Telegram https://t.me/+Z-SwcvXZFRVhZTQ0.";
  }
  return returnedError;
}
