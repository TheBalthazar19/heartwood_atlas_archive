"use client";

import Link from "next/link";
import {
  type GameItem,
  type Monster,
  getRarityColor,
  getRarityBgColor,
  categories,
} from "@/lib/data";

interface ItemDetailCardProps {
  item: GameItem | Monster;
}

export function ItemDetailCard({ item }: ItemDetailCardProps) {
  const category = categories.find((c) => c.id === item.category);
  const isMonster = "drops" in item;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left Panel - Item Icon and Basic Info */}
      <div className="lg:col-span-1">
        <div
          className={`rounded-xl border p-8 text-center ${getRarityBgColor(
            item.rarity
          )}`}
        >
          {/* Glow effect for higher rarities */}
          {(item.rarity === "legendary" || item.rarity === "epic") && (
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-current to-transparent blur-xl opacity-20 pointer-events-none" />
          )}

          {/* Icon */}
          <div className="relative mb-6">
            <div className="text-8xl mx-auto">{item.icon}</div>
          </div>

          {/* Name */}
          <h1
            className={`font-sans text-3xl font-bold mb-2 ${getRarityColor(
              item.rarity
            )}`}
          >
            {item.name}
          </h1>

          {/* Rarity Badge */}
          <span
            className={`inline-block px-3 py-1 text-sm font-sans font-semibold uppercase rounded-full mb-4 ${getRarityColor(
              item.rarity
            )} bg-background/50`}
          >
            {item.rarity}
          </span>

          {/* Category */}
          <p className="text-muted-foreground font-serif">
            <Link
              href={`/category/${item.category}`}
              className="hover:text-primary transition-colors"
            >
              {category?.name || item.category}
            </Link>
          </p>

          {/* Type */}
          <p className="text-sm text-muted-foreground font-serif mt-1">
            {item.type}
          </p>

          {/* Level */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground font-serif">
              Required Level
            </p>
            <p className="text-2xl font-sans font-bold text-foreground">
              {item.level}
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel - Stats and Details */}
      <div className="lg:col-span-2 space-y-6">
        {/* Description */}
        <div className="parchment rounded-xl p-6">
          <h2 className="font-sans text-xl font-semibold text-foreground mb-4">
            Description
          </h2>
          <p className="text-muted-foreground font-serif leading-relaxed italic">
            &ldquo;{item.description}&rdquo;
          </p>
        </div>

        {/* Stats */}
        {item.stats && Object.keys(item.stats).length > 0 && (
          <div className="parchment rounded-xl p-6">
            <h2 className="font-sans text-xl font-semibold text-foreground mb-4">
              {isMonster ? "Combat Stats" : "Item Stats"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(item.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 bg-background/30 rounded-lg"
                >
                  <span className="text-muted-foreground font-serif">{key}</span>
                  <span className="font-sans font-semibold text-primary">
                    {typeof value === "number"
                      ? value.toLocaleString()
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Source / Location */}
        <div className="parchment rounded-xl p-6">
          <h2 className="font-sans text-xl font-semibold text-foreground mb-4">
            {isMonster ? "Location" : "How to Obtain"}
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-serif text-foreground">
                {isMonster
                  ? (item as Monster).location
                  : (item as GameItem).source}
              </p>
            </div>
          </div>
        </div>

        {/* Crafting Recipe */}
        {"craftingRecipe" in item && item.craftingRecipe && (
          <div className="parchment rounded-xl p-6">
            <h2 className="font-sans text-xl font-semibold text-foreground mb-4">
              Crafting Recipe
            </h2>
            <div className="space-y-4">
              {/* Station */}
              <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg">
                <span className="text-muted-foreground font-serif">Station:</span>
                <span className="font-sans font-semibold text-foreground">
                  {item.craftingRecipe.station}
                </span>
              </div>

              {/* Skill Required */}
              <div className="flex items-center gap-3 p-3 bg-background/30 rounded-lg">
                <span className="text-muted-foreground font-serif">
                  Skill Required:
                </span>
                <span className="font-sans font-semibold text-foreground">
                  Level {item.craftingRecipe.skillRequired}
                </span>
              </div>

              {/* Materials */}
              <div>
                <p className="text-sm text-muted-foreground font-serif mb-3">
                  Materials
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.craftingRecipe.materials.map((material) => (
                    <Link
                      key={material.itemId}
                      href={`/item/${material.itemId}`}
                      className="flex items-center gap-3 p-3 bg-background/30 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <span className="text-2xl">📦</span>
                      <div className="flex-1">
                        <p className="font-serif text-foreground group-hover:text-primary transition-colors">
                          {material.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Quantity: {material.quantity}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dropped By */}
        {"droppedBy" in item && item.droppedBy && item.droppedBy.length > 0 && (
          <div className="parchment rounded-xl p-6">
            <h2 className="font-sans text-xl font-semibold text-foreground mb-4">
              Dropped By
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.droppedBy.map((monster) => (
                <span
                  key={monster}
                  className="px-3 py-2 bg-background/30 rounded-lg text-sm font-serif text-muted-foreground"
                >
                  {monster}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
