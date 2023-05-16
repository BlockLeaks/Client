"use client";
import { useEffect, useState } from "react";
import {
  ConnectWithSismo,
  GetLeakss,
  WriteLeaks,
} from "./component/writeLeaks";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import ParentComponent from "./component/parentDrag";
import { InjectedConnector } from "wagmi/connectors/injected";

type SetteType = {
  title: string;
  description: string;
  link: string;
};
export default function Main({ groupId }: { groupId: `0x${string}` }) {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const [cid, setCID] = useState<string | undefined>();
  const [done, setDone] = useState<boolean>(false);
  const { address: account, isConnected } = useAccount();
  const [responseBytes, setResponseBytes] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [sette, setSette] = useState<SetteType>({
    title: "",
    description: "",
    link: "",
  });

  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    if (!isConnected) {
      connect();
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSette((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  if (done) {
    return <h1 className="text-blue-800 text-2xl">Well Done !!!</h1>;
  }
  return (
    <>
      <div className="container">
        {isConnected && !responseBytes && (
          <div className="container flex justify-center">
            <div className="mb-6">
              <ConnectWithSismo
                account={account!}
                groupId={groupId}
                setResponse={setResponseBytes}
              />
            </div>
          </div>
        )}
        {isConnected && !cid && <GetLeakss groupId={groupId} />}
        {!cid && responseBytes && <ParentComponent setCID={setCID} />}
        {cid && (
          <h1 className="text-blue-800 text-2xl">
            Here is your ipfs path : {cid}
          </h1>
        )}
        {cid && responseBytes && (
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:border-indigo-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Stake (not used in this demo)"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:border-indigo-500"
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheck}
                className="w-5 h-5 text-indigo-600 rounded"
              />
              <label className="text-blue-800 ml-2">Validate the send</label>
            </div>
          </div>
        )}
        {isChecked && isConnected && responseBytes && (
          <WriteLeaks
            account={account!}
            groupId={groupId}
            responseBytes={responseBytes}
            setSuccess={setDone}
            title={sette.title}
            content={sette.description}
            uri={"ipfs://" + cid}
          />
        )}

        {error && (
          <>
            <h2>{error}</h2>
          </>
        )}
      </div>
    </>
  );
}
