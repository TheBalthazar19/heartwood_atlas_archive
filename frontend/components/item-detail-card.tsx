"use client";

import { GameItem, Monster } from "@/lib/data";

interface Props {
  item: GameItem | Monster;
}

export function ItemDetailCard({ item }: Props) {
  return (
    <div className="fantasy-card rounded-xl p-8 max-w-3xl mx-auto">
      
      {/* Icon */}
      {item.icon && (
        <div className="flex justify-center mb-6">
          <img
            src={item.icon}
            alt={item.name}
            className="w-24 h-24 object-contain"
          />
        </div>
      )}

      {/* Name */}
      <h1 className="text-3xl font-bold text-center mb-3">
        {item.name}
      </h1>

      {/* Category */}
      <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-6">
        {item.category}
      </p>

      {/* Details */}
      {item.details && item.details.length > 0 && (
        <div className="space-y-3">
          {item.details.map((detail, i) => (
            <p key={i} className="text-muted-foreground font-serif">
              {detail}
            </p>
          ))}
        </div>
      )}

      {/* Search text (optional debug/info) */}
      {item.search && (
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {item.search}
          </p>
        </div>
      )}
    </div>
  );
}