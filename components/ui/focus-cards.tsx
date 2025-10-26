"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
  className={cn(
    "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden",
    "h-64 md:h-96 lg:h-82 w-full transition-all duration-300 ease-out",
    "md:[&]:will-change-transform",
    hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98]"
  )}
>
  <img
    src={card.src}
    alt={card.title}
    className="object-cover absolute inset-0 w-full h-full"
  />
  <div
    className={cn(
      "absolute inset-0 bg-black/50 flex flex-col items-start py-8 px-4 transition-opacity duration-300",
      "opacity-100 md:opacity-0",
      hovered === index && "md:opacity-100"
    )}
  >
    <div className="flex flex-col justify-end h-full gap-1 p-4">
      <div className="text-2xl font-bold">{card.title}</div>
      <div className="text-gray-300 text-base md:text-lg">{card.desc}</div>
    </div>
  </div>
</div>

  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  desc: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
