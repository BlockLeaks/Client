import * as React from "react";
import { Groupe } from "../utils/returnFetch";
import { GroupCard } from "./card";

export function CardList({ groups }: { groups: Groupe[] }) {
  // if (
  //   !groups ||
  //   groups == undefined ||
  //   !Array.isArray(groups) ||
  //   groups.length == 0
  // )
  return (
    <div className="flex-grow p-4 w-full">
      <div className="space-y-4">
        {groups.map((x, index) => (
          <GroupCard key={index} group={x} />
        ))}
      </div>
    </div>
  );
}
