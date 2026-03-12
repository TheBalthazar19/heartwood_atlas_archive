import armor from "@/public/data/armor.json";
import cosmetics from "@/public/data/cosmetics.json";
import items from "@/public/data/items.json";
import monsters from "@/public/data/monsters.json";
import mounts from "@/public/data/mounts.json";
import recipes from "@/public/data/recipes.json";
import tools from "@/public/data/tools.json";
import weapons from "@/public/data/weapons.json";

export interface Item {
  name: string;
  icon: string | null;
  category: string;
  details?: string[];
  search?: string;
}

export const categories = [
  {
    id: "armor",
    name: "Armor",
    description: "Protective equipment worn by adventurers.",
  },
  {
    id: "weapons",
    name: "Weapons",
    description: "Weapons used in combat.",
  },
  {
    id: "tools",
    name: "Tools",
    description: "Tools used for gathering and crafting.",
  },
  {
    id: "recipes",
    name: "Recipes",
    description: "Crafting recipes used to create items.",
  },
  {
    id: "mounts",
    name: "Mounts",
    description: "Rideable creatures used for travel.",
  },
  {
    id: "monsters",
    name: "Monsters",
    description: "Creatures found across the world.",
  },
  {
    id: "items",
    name: "Items",
    description: "General items and materials.",
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    description: "Cosmetic items for appearance.",
  },
] as const;

export type CategoryType = (typeof categories)[number]["id"];

const data: Record<CategoryType, Item[]> = {
  armor,
  weapons,
  tools,
  recipes,
  mounts,
  monsters,
  items,
  cosmetics,
};

export function getItemsByCategory(category: CategoryType): Item[] {
  return data[category] || [];
}

export function getAllItems(): Item[] {
  return Object.values(data).flat();
}