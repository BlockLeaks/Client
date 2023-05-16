import * as React from "react";
import { Groupe } from "../utils/returnFetch";
import Link from "next/link";

export function GroupCard({ group }: { group: Groupe }) {
  const { id, name, latestSnapshot } = group;
  const url = latestSnapshot.dataUrl;
  return (
    <div className="p-6 w-full bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-black pl-8">
        {" "}
        <Link href={group.name}>
          <h1>
            <span className="underline mr-2">Name :</span> {name}
          </h1>
          <h2>
            <span className="underline mr-2">Id :</span> {id}
          </h2>
        </Link>
      </div>
    </div>
  );
}
