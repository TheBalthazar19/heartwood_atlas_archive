"use client";

import Link from "next/link";
import {
  Package,
  Sword,
  Shield,
  Hammer,
  ScrollText,
  Skull,
  Bird,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { categories, type CategoryType } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package,
  Sword,
  Shield,
  Hammer,
  ScrollText,
  Skull,
  Bird,
  Sparkles,
};

interface CategorySidebarProps {
  currentCategory: CategoryType;
}

export function CategorySidebar({ currentCategory }: CategorySidebarProps) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Categories */}
      <div className="parchment rounded-xl p-4">
        <h3 className="font-sans font-semibold text-foreground mb-4 flex items-center gap-2">
          <ScrollText className="w-4 h-4 text-primary" />
          Browse Categories
        </h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            const isActive = category.id === currentCategory;

            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-serif transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1">{category.name}</span>
                <span className="text-xs text-muted-foreground">
                  {category.count}
                </span>
                {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Quick Links */}
      <div className="parchment rounded-xl p-4">
        <h3 className="font-sans font-semibold text-foreground mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Quick Filters
        </h3>
        <div className="space-y-2">
          <Link
            href={`/category/${currentCategory}?rarity=legendary`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-serif text-rarity-legendary hover:bg-rarity-legendary/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-rarity-legendary" />
            Legendary Only
          </Link>
          <Link
            href={`/category/${currentCategory}?rarity=epic`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-serif text-rarity-epic hover:bg-rarity-epic/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-rarity-epic" />
            Epic Only
          </Link>
          <Link
            href={`/category/${currentCategory}?rarity=rare`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-serif text-rarity-rare hover:bg-rarity-rare/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-rarity-rare" />
            Rare Only
          </Link>
        </div>
      </div>

      {/* Help */}
      <div className="parchment rounded-xl p-4">
        <p className="text-xs text-muted-foreground font-serif">
          Use the table sorting and filtering options to find specific items. Click any item to view detailed information.
        </p>
      </div>
    </div>
  );
}
