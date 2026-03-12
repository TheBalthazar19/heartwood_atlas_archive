import armor from "@/public/data/armor.json";
import cosmetics from "@/public/data/cosmetics.json";
import itemsData from "@/public/data/items.json";
import monsters from "@/public/data/monsters.json";
import mounts from "@/public/data/mounts.json";
import recipes from "@/public/data/recipes.json";
import tools from "@/public/data/tools.json";
import weapons from "@/public/data/weapons.json";


export interface GameItem {
  id?: string
  name: string
  icon: string | null
  category: string

  description?: string
  details?: string[]

  rarity?: string
  search?: string

  relatedItems?: string[]
}

export interface Monster {
  id?: string
  name: string
  icon: string | null
  category: string

  description?: string
  details?: string[]

  search?: string

  drops?: string[]
}
export interface Monster {
  id?: string
  name: string
  icon: string | null
  category: string

  description?: string
  details?: string[]
  search?: string

 
}
export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
};
export const categories: Category[] = [
  {
    id: "armor",
    name: "Armor",
    description: "Protective equipment.",
    icon: "Shield",
    count: armor.length,
  },
  {
    id: "weapons",
    name: "Weapons",
    description: "Combat weapons.",
    icon: "Sword",
    count: weapons.length,
  },
  {
    id: "tools",
    name: "Tools",
    description: "Crafting tools.",
    icon: "Hammer",
    count: tools.length,
  },
  {
    id: "recipes",
    name: "Recipes",
    description: "Crafting recipes.",
    icon: "ScrollText",
    count: recipes.length,
  },
  {
    id: "mounts",
    name: "Mounts",
    description: "Rideable mounts.",
    icon: "Bird",
    count: mounts.length,
  },
  {
    id: "monsters",
    name: "Monsters",
    description: "Enemies.",
    icon: "Skull",
    count: monsters.length,
  },
  {
    id: "items",
    name: "Items",
    description: "General items.",
    icon: "Package",
    count: itemsData.length,
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    description: "Cosmetic items.",
    icon: "Sparkles",
    count: cosmetics.length,
  },
] as const;

export type CategoryType = (typeof categories)[number]["id"];

const data: Record<string, GameItem[]> = {
  armor,
  weapons,
  tools,
  recipes,
  mounts,
  monsters,
  items: itemsData,
  cosmetics,
};

export function getItemsByCategory(category: CategoryType): GameItem[] {
  return data[category] ?? [];
}

export function getAllItems(): GameItem[] {
  return Object.values(data).flat();
}

/* Exported for components like featured-items */
export const allItems: GameItem[] = getAllItems();

function makeId(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getItemById(id: string): GameItem | undefined {
  return allItems.find((item) => makeId(item.name) === id);
}

export function getAllItemIds() {
  return allItems.map((item) => ({
    id: makeId(item.name),
  }));
}

/* Search ued by search-dropdown */
export function searchItems(query: string): GameItem[] {
  const q = query.toLowerCase();

  return getAllItems().filter((item) => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.search?.toLowerCase().includes(q)
    );
  });
}

/* Rarity color helpers */

export function getRarityColor(rarity?: string) {
  switch (rarity?.toLowerCase()) {
    case "common":
      return "text-gray-400";
    case "uncommon":
      return "text-green-400";
    case "rare":
      return "text-blue-400";
    case "epic":
      return "text-purple-400";
    case "legendary":
      return "text-yellow-400";
    default:
      return "text-gray-400";
  }
}

export function getRarityBgColor(rarity?: string) {
  switch (rarity?.toLowerCase()) {
    case "common":
      return "bg-gray-500/10";
    case "uncommon":
      return "bg-green-500/10";
    case "rare":
      return "bg-blue-500/10";
    case "epic":
      return "bg-purple-500/10";
    case "legendary":
      return "bg-yellow-500/10";
    default:
      return "bg-gray-500/10";
  }
}
export function getItemSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}