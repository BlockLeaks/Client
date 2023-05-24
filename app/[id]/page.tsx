"use client";
import { Groupe } from "../utils/returnFetch";
import { useEffect, useState } from "react";
import { fetching } from "../utils/returnFetch";
import Main from "../example";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

export default function Page({ group }: { group: Groupe }) {
  if (false)
    return (
      <div className="bg-rose-100 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="space-y-4">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex items-center justify-center space-x-2 text-blue-500">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-rose-100 flex min-h-screen flex-col items-center justify-between p-24">
      <Main groupId={group.id} />;
    </div>
  );
}
