"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Groupe } from "./utils/returnFetch";
import { Component, useEffect, useState } from "react";
import { fetching } from "./utils/returnFetch";
import Main from "./example";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import AppHeader from "./header";
import { Header } from "next/dist/lib/load-custom-routes";
import { useRouter, usePathname } from "next/navigation";
import Home from "./page";
import Page from "./[id]/page";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

export default function ThemeContext() {
  const pathname = usePathname();
  const [groups, setGroups] = useState<Groupe[]>();
  const [isGroups, setIsGroups] = useState<boolean>(false);
  const [group, setGroup] = useState<Groupe>();

  useEffect(() => {
    if (!isGroups) {
      fetching()
        .then((x) => {
          setGroups(x as Groupe[]);
        })
        .then(() => setIsGroups(true));
    }
  }, []);

  const isPath = pathname === "/";

  if (isGroups && !isPath && !group) {
    const mapped = groups?.filter((x: Groupe) => pathname.includes(x.name));
    if (!mapped || !mapped[0]) return <></>;
    setGroup(mapped[0]);
  }

  return (
    <>
      {/* <h1 className="text-white">{pathname}</h1> */}
      <WagmiConfig config={config}>
        <AppHeader group={[groups!] as any} />
        {isPath && <Home groups={groups!} isGroups={isGroups} />}
        {!isPath && <Page group={group!} />}
      </WagmiConfig>
    </>
  );
}
