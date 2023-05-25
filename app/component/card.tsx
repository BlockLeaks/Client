import * as React from "react";
import { Groupe } from "../utils/returnFetch";
import Link from "next/link";
import Image from "next/image";

export function GroupCard({ group }: { group: Groupe }) {
  const { id, name, latestSnapshot } = group;
  const url = latestSnapshot.dataUrl;

  const [showData, setShowData] = React.useState(false);
  const [fetchedData, setFetchedData] = React.useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFetchedData(data);
      setShowData(true);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };
  return (
    <div className="p-6 w-full bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-black pl-8">
        <Link href={group.name}>
          <h1>
            <span className="underline mr-2">Name :</span> {name}
          </h1>
          <h2>
            <span className="underline mr-2">Id :</span> {id}
          </h2>
          <h2>Url: {latestSnapshot.dataUrl}</h2>
        </Link>
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Group info
        </button>
        {showData && (
          <div
            className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={() => setShowData(false)}
          >
            <div
              className={`${
                Object.keys(fetchedData!).length > 0
                  ? "absolute bg-white p-6 rounded-xl shadow-md flex flex-col max-w-4/5 overflow-auto"
                  : "bg-white p-3 rounded-xl shadow-md"
              }`}
              style={{ top: "15%", bottom: "15%" }}
              onClick={(e) => e.stopPropagation()}
            >
              {Object.keys(fetchedData!).length > 0 ? (
                <>
                  <div className="flex justify-between">
                    <h2>Account</h2>
                    <h2>Ranks</h2>
                  </div>
                  {Object.keys(fetchedData!).map((key) => (
                    <div
                      key={key}
                      className="flex flex-col md:flex-row justify-between"
                    >
                      <h3 className="mb-2 md:mb-0">{key}</h3>
                      <p>{fetchedData![key]}</p>
                    </div>
                  ))}
                </>
              ) : (
                <h3>There is nobody in this group</h3>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
