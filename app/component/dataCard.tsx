import * as React from "react";
import Link from "next/link";
import { DataParsed } from "./writeLeaks";

export function DataCard({ carte }: { carte: DataParsed }) {
  const {
    id,
    messageOwner,
    timestamp,
    groupId,
    title,
    description,
    uri,
    stakeAmount,
    approved,
    withdrawn,
  } = carte;
  const failed = !approved && withdrawn;
  const verified = withdrawn && approved;
  const stillinStake = !(failed || verified);
  let color = "bg-gray-200"; // Default color
  let textColor = "";

  if (verified) {
    color = "bg-green-200";
    textColor = "text-green-200";
  } else if (failed) {
    color = "bg-red-200";
    textColor = "text-red-200";
  } else if (stillinStake) {
    color = "bg-yellow-200"; // Flesh color isn't available in default Tailwind palette. You might need to customize your palette.
    textColor = "text-yellow-200";
  }

  return (
    <div className={`w-full p-4 mx-auto ${color} rounded-xl shadow-md`}>
      <div className="flex justify-between items-center space-x-4">
        <div>
          <h2 className="text-lg font-bold text-black">{title}</h2>
          <p className="text-sm text-black">{description}</p>
          <Link href={uri} target="_blank" className="text-sm text-blue-800">
            {uri}
          </Link>
          <p className="text-sm text-black">Msg sender {messageOwner}</p>
          <p className="text-sm text-black">Stake 😁</p>
        </div>
        <div className="flex items-center">
          <span
            className={`text-sm bg-blue-500 ${textColor} rounded px-2 py-1`}
          >
            {verified ? "Verified" : failed ? "Failed" : "Still in Stake"}
          </span>
        </div>
      </div>
      <div className="mt-4">{/* Other details of the card can go here */}</div>
    </div>
  );
}
