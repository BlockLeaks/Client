import * as React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { abi, contractAddress, sismoConnectConfig } from "../Constant/all";
import { SismoConnectButton } from "@sismo-core/sismo-connect-react";
import { signMessage } from "../utils/index";
import { ethers } from "ethers";
import { BigNumber } from "ethers";
import DataCardList from "./dataCardLis";
import { rpc } from "../Constant/all";
import { useState } from "react";

type DataRaw = {
  id: BigNumber;
  messageOwner: `0x${string}`;
  timestamp: BigNumber;
  groupId: `0x${string}`;
  title: string;
  description: string;
  cid: string;
  stakeAmount: BigNumber;
  approved: boolean;
  withdrawn: boolean;
};
export type DataParsed = {
  id: number;
  messageOwner: `0x${string}`;
  timestamp: number;
  groupId: `0x${string}`;
  title: string;
  description: string;
  uri: string;
  stakeAmount: string;
  approved: boolean;
  withdrawn: boolean;
};
function parseData(dataRaw: DataRaw): DataParsed {
  return {
    id: dataRaw.id.toNumber(),
    messageOwner: dataRaw.messageOwner,
    timestamp: dataRaw.timestamp.toNumber(),
    groupId: dataRaw.groupId,
    title: dataRaw.title,
    description: dataRaw.description,
    uri: dataRaw.cid,
    stakeAmount: ethers.utils.formatEther(dataRaw.stakeAmount),
    approved: dataRaw.approved,
    withdrawn: dataRaw.withdrawn,
  };
}
export function WriteLeaks({
  responseBytes,
  groupId,
  title,
  content,
  uri,
  setSuccess,
}: {
  responseBytes: string;
  groupId: `0x${string}`;
  title: string;
  content: string;
  uri: string;
  account: `0x${string}`;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: "writeMessage",
    args: [responseBytes, groupId, title, content, uri],
    // value: one as unknown as undefined for now wagmi doesn't work , we'll see after,
  });
  const { write, isSuccess } = useContractWrite(config);
  React.useEffect(() => {
    if (isSuccess) setSuccess(true);
  });

  return (
    <div>
      <button
        className={`px-4 py-2 rounded text-lightPink-500 bg-green-500 focus:outline-none ${
          !write && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!write}
        onClick={() => write?.()}
      >
        Write your Leaks
      </button>
    </div>
  );
}
async function r(groupId: `0x${string}`) {
  let provider = new ethers.providers.JsonRpcProvider(rpc);

  let add = contractAddress;
  let contractABI = abi;

  let contract = new ethers.Contract(add, contractABI, provider);

  let result = await contract.getMessagesByGroupId(groupId);
  return result;
}

export function GetLeakss({ groupId }: { groupId: `0x${string}` }) {
  const [data, setData] = useState<DataRaw[]>();
  r(groupId as unknown as `0x${string}`).then((x: DataRaw[]) => setData(x));

  if (!data || !data[0]) return <div></div>;

  const goodData = data.map((x: DataRaw) => parseData(x));

  return (
    <div>
      <DataCardList cartes={goodData} />
    </div>
  );
}
export function ConnectWithSismo({
  groupId,
  account,
  setResponse,
}: {
  groupId: `0x${string}`;
  account: `0x${string}`;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <SismoConnectButton
      config={sismoConnectConfig}
      claim={{ groupId: groupId as string }}
      signature={{ message: signMessage(account) }}
      onResponseBytes={(responseBytes: string) => setResponse(responseBytes)}
      text={"Generate proof to Write on contract"}
    />
  );
}
