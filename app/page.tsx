"use client";
import { CardList } from "./component/cardList";
import { fetching } from "./utils/returnFetch";
import { Groupe } from "./utils/returnFetch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home({ groups }: { groups: Groupe[] }) {
  const [str, setStr] = useState<string>("");
  const [parsedGroups, setParsedgroups] = useState<Groupe[]>(groups);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value.toString();
    setStr(str);

    const buffer = groups?.filter((x) =>
      x.name.toLowerCase().includes(str.replace(" ", "-").toLowerCase())
    );
    setParsedgroups(buffer);
  };
  // useEffect(() => {
  //   if (isGroups) {
  //   }
  // });
  // console.log("In page : ", groups);

  return (
    <main className="bg-rose-100 flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="text"
        name="title"
        placeholder="Group you're looking for"
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md 
        focus:outline-none text-black focus:border-indigo-500"
      />
      <CardList groups={parsedGroups} />
    </main>
  );
}
