"use client";

import Link from "next/link";
import { getItemById, getRarityColor, getRarityBgColor } from "@/lib/data";
import { getItemSlug } from "@/lib/data";
interface RelatedItemsProps {
  itemIds: string[];
}

export function RelatedItems({ itemIds }: RelatedItemsProps) {
  const relatedItems = itemIds
    .map((id) => getItemById(id))
    .filter(Boolean)
    .slice(0, 4);

  if (relatedItems.length === 0) return null;

  return (
    <div>
      <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
        Related Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedItems.map(
          (item) =>
            item && (
              <Link key={item.id} href={`/item/${getItemSlug(item.name)}`}>
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:via-accent/10 group-hover:to-primary/30 transition-all duration-500 blur-sm" />

                  <div
                    className={`relative h-full rounded-xl border p-4 transition-all duration-300 group-hover:scale-[1.02] ${getRarityBgColor(
                      item.rarity
                    )}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-serif font-medium truncate ${getRarityColor(
                            item.rarity
                          )}`}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground text-center">
  {item.category}
</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
