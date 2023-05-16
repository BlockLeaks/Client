import * as React from "react";
import { DataCard } from "./dataCard";
import { DataParsed } from "./writeLeaks";

export default function DataCardList({ cartes }: { cartes: DataParsed[] }) {
  return (
    <div className="space-y-4">
      {cartes.map((x: DataParsed, index: number) => (
        <DataCard key={index} carte={x} />
      ))}
    </div>
  );
}
