"use client";
import { CardList } from "./component/cardList";
import { fetching } from "./utils/returnFetch";
import { Groupe } from "./utils/returnFetch";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home({
  groups,
  isGroups,
}: {
  groups: Groupe[];
  isGroups: boolean;
}) {
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
  useEffect(() => {
    if (isGroups && !parsedGroups) {
      setParsedgroups(groups);
    }
  });
  // console.log("In page : ", groups);
  if (!isGroups || !parsedGroups) {
    return (
      <main className="bg-rose-100 flex min-h-screen flex-col items-center justify-between p-24">
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
      </main>
    );
  }
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
      {isGroups && <CardList groups={parsedGroups} />}
    </main>
  );
}
