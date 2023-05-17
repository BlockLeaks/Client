"use client";
import { CardList } from "./component/cardList";
import { fetching } from "./utils/returnFetch";
import { Groupe } from "./utils/returnFetch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home({ params }: { params: { id: string } }) {
  const [groups, setGroups] = useState<Groupe[]>();
  const [str, setStr] = useState<string>("");
  const [isGroups, setIsGroups] = useState<boolean>();
  const [parsedGroups, setParsedgroups] = useState<Groupe[]>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value.toString();
    setStr(str);
    if (isGroups) {
      const buffer = groups?.filter((x) =>
        x.name.toLowerCase().includes(str.toLowerCase())
      );
      setParsedgroups(buffer);
    }
  };

  useEffect(() => {
    if (!isGroups) {
      fetching()
        .then((x) => {
          setGroups(x);
          setParsedgroups(x);
        })
        .then(() => setIsGroups(true));
    }
  }, []);

  console.log(groups);
  if (!isGroups) return;

  return (
    <main className="bg-rose-100 flex min-h-screen flex-col items-center justify-between p-24">
      <header className="bg-blue-600 w-full text-white py-8 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">BlockLeaks</h1>
        <p className="text-lg">
          Your shield for anonymous truth-telling! Leak confidential info, prove
          group membership, all while staying invisible with Sismo tech. Built
          on Gnosis. Power of transparency, without compromising identity.
        </p>

        <input
          value={str}
          placeholder="Search Name"
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:border-indigo-500"
        />
      </header>
      <CardList groups={parsedGroups!} />
    </main>
  );
}
