"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = { title: string; src: string; desc: string };

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const [loaded, setLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden",
          "h-64 md:h-96 2xl:h-85 w-full transition-all duration-300 ease-out",
          "md:[&]:will-change-transform",
          hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98]"
        )}
      >
        <div className="relative w-full h-full">
          {!imgError ? (
            <>
              {/* Placeholder mientras carga */}
              {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-neutral-800/30" />
              )}
              <Image
                fill
                src={card.src}
                alt={card.title}
                className={cn(
                  "object-cover transition-opacity duration-300",
                  loaded ? "opacity-100" : "opacity-0"
                )}
                // onLoadingComplete está soportado; onLoad también sirve según tu necesidad.
                onLoad={() => setLoaded(true)}
                onError={() => setImgError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // En Next 16+ considera preload en lugar de priority
                // preload
              />
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-neutral-800 text-white text-sm">
              No image: {card.title}
            </div>
          )}
        </div>

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
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
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
