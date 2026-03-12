// Heartwood Atlas - Game Database Types and Mock Data

export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type CategoryType = 
  | 'items' 
  | 'weapons' 
  | 'armor' 
  | 'tools' 
  | 'crafting-recipes' 
  | 'monsters' 
  | 'mounts' 
  | 'cosmetics';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export interface GameItem {
  id: string;
  name: string;
  category: CategoryType;
  type: string;
  rarity: Rarity;
  level: number;
  description: string;
  stats?: Record<string, number | string>;
  source: string;
  icon: string;
  craftingRecipe?: CraftingRecipe;
  droppedBy?: string[];
  relatedItems?: string[];
}

export interface CraftingRecipe {
  materials: { itemId: string; name: string; quantity: number }[];
  station: string;
  skillRequired: number;
}

export interface Monster {
  id: string;
  name: string;
  category: 'monsters';
  type: string;
  level: number;
  rarity: Rarity;
  description: string;
  location: string;
  drops: { itemId: string; name: string; dropRate: number }[];
  stats: Record<string, number>;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'items',
    name: 'Items',
    description: 'General items and consumables',
    icon: 'Package',
    count: 1247,
  },
  {
    id: 'weapons',
    name: 'Weapons',
    description: 'Swords, bows, staves, and more',
    icon: 'Sword',
    count: 523,
  },
  {
    id: 'armor',
    name: 'Armor',
    description: 'Protective gear and equipment',
    icon: 'Shield',
    count: 412,
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Crafting and gathering tools',
    icon: 'Hammer',
    count: 189,
  },
  {
    id: 'crafting-recipes',
    name: 'Crafting Recipes',
    description: 'Blueprints and schematics',
    icon: 'ScrollText',
    count: 876,
  },
  {
    id: 'monsters',
    name: 'Monsters',
    description: 'Creatures of the realm',
    icon: 'Skull',
    count: 634,
  },
  {
    id: 'mounts',
    name: 'Mounts',
    description: 'Rideable companions',
    icon: 'Bird',
    count: 156,
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    description: 'Skins and visual customizations',
    icon: 'Sparkles',
    count: 892,
  },
];

export const items: GameItem[] = [
  {
    id: 'iron-sword',
    name: 'Iron Sword',
    category: 'weapons',
    type: 'One-Handed Sword',
    rarity: 'common',
    level: 5,
    description: 'A sturdy iron blade, forged in the fires of the Heartwood smithy. Reliable for any adventurer starting their journey.',
    stats: {
      'Attack Power': 45,
      'Attack Speed': 1.4,
      'Durability': 100,
    },
    source: 'Blacksmith Vendor',
    icon: '⚔️',
    craftingRecipe: {
      materials: [
        { itemId: 'iron-bar', name: 'Iron Bar', quantity: 3 },
        { itemId: 'leather-strips', name: 'Leather Strips', quantity: 2 },
      ],
      station: 'Anvil',
      skillRequired: 10,
    },
    droppedBy: ['Goblin Warrior', 'Bandit Scout'],
    relatedItems: ['steel-sword', 'iron-dagger', 'iron-shield'],
  },
  {
    id: 'steel-sword',
    name: 'Steel Sword',
    category: 'weapons',
    type: 'One-Handed Sword',
    rarity: 'uncommon',
    level: 15,
    description: 'A refined steel blade with exceptional balance. The mark of a seasoned warrior.',
    stats: {
      'Attack Power': 78,
      'Attack Speed': 1.5,
      'Durability': 150,
      'Critical Chance': '5%',
    },
    source: 'Crafting',
    icon: '🗡️',
    craftingRecipe: {
      materials: [
        { itemId: 'steel-bar', name: 'Steel Bar', quantity: 4 },
        { itemId: 'hardened-leather', name: 'Hardened Leather', quantity: 2 },
        { itemId: 'iron-sword', name: 'Iron Sword', quantity: 1 },
      ],
      station: 'Master Forge',
      skillRequired: 25,
    },
    relatedItems: ['iron-sword', 'mithril-sword', 'steel-armor'],
  },
  {
    id: 'mithril-sword',
    name: 'Mithril Longsword',
    category: 'weapons',
    type: 'Two-Handed Sword',
    rarity: 'rare',
    level: 30,
    description: 'Forged from the legendary mithril ore found deep within the Starfall Caverns. Its blade gleams with an ethereal light.',
    stats: {
      'Attack Power': 156,
      'Attack Speed': 1.3,
      'Durability': 250,
      'Critical Chance': '12%',
      'Magic Damage': 25,
    },
    source: 'Starfall Caverns',
    icon: '✨',
    droppedBy: ['Crystal Golem', 'Mithril Guardian'],
    relatedItems: ['steel-sword', 'mithril-armor', 'mithril-bar'],
  },
  {
    id: 'dragonbane',
    name: 'Dragonbane',
    category: 'weapons',
    type: 'Two-Handed Sword',
    rarity: 'epic',
    level: 50,
    description: 'An ancient blade blessed by the Dragon Slayers of old. It burns with righteous fury against dragonkind.',
    stats: {
      'Attack Power': 312,
      'Attack Speed': 1.2,
      'Durability': 400,
      'Critical Chance': '18%',
      'Dragon Damage': '+150%',
      'Fire Resistance': '+25%',
    },
    source: 'World Boss: Elder Dragon',
    icon: '🔥',
    droppedBy: ['Elder Dragon'],
    relatedItems: ['dragon-scale-armor', 'fire-resistance-potion'],
  },
  {
    id: 'starweaver',
    name: 'Starweaver',
    category: 'weapons',
    type: 'Staff',
    rarity: 'legendary',
    level: 60,
    description: 'A staff woven from the essence of fallen stars. Those who wield it command the very fabric of the cosmos.',
    stats: {
      'Magic Power': 520,
      'Cast Speed': '+25%',
      'Mana Regeneration': '+50%',
      'Spell Critical': '22%',
      'Cosmic Damage': '+200%',
    },
    source: 'Celestial Observatory Raid',
    icon: '⭐',
    droppedBy: ['Astral Keeper'],
    relatedItems: ['cosmic-robes', 'star-essence'],
  },
  {
    id: 'iron-bar',
    name: 'Iron Bar',
    category: 'items',
    type: 'Crafting Material',
    rarity: 'common',
    level: 1,
    description: 'A bar of refined iron, essential for smithing basic equipment.',
    source: 'Smelting',
    icon: '🔩',
    craftingRecipe: {
      materials: [
        { itemId: 'iron-ore', name: 'Iron Ore', quantity: 2 },
        { itemId: 'coal', name: 'Coal', quantity: 1 },
      ],
      station: 'Furnace',
      skillRequired: 5,
    },
    relatedItems: ['iron-ore', 'steel-bar', 'iron-sword'],
  },
  {
    id: 'health-potion',
    name: 'Health Potion',
    category: 'items',
    type: 'Consumable',
    rarity: 'common',
    level: 1,
    description: 'A ruby-red elixir that restores vitality. Every adventurer\'s trusted companion.',
    stats: {
      'Healing': 250,
      'Cooldown': '30s',
    },
    source: 'Alchemist Vendor',
    icon: '🧪',
    craftingRecipe: {
      materials: [
        { itemId: 'red-herb', name: 'Red Herb', quantity: 3 },
        { itemId: 'spring-water', name: 'Spring Water', quantity: 1 },
      ],
      station: 'Alchemy Table',
      skillRequired: 5,
    },
    relatedItems: ['mana-potion', 'greater-health-potion'],
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    category: 'armor',
    type: 'Light Armor',
    rarity: 'common',
    level: 5,
    description: 'Supple leather armor offering protection without hindering movement.',
    stats: {
      'Defense': 25,
      'Evasion': '+5%',
      'Durability': 80,
    },
    source: 'Leatherworker',
    icon: '🦺',
    craftingRecipe: {
      materials: [
        { itemId: 'leather', name: 'Leather', quantity: 5 },
        { itemId: 'iron-buckles', name: 'Iron Buckles', quantity: 2 },
      ],
      station: 'Leatherworking Table',
      skillRequired: 10,
    },
    relatedItems: ['leather-boots', 'leather-gloves', 'hardened-leather-armor'],
  },
  {
    id: 'plate-armor',
    name: 'Plate Armor',
    category: 'armor',
    type: 'Heavy Armor',
    rarity: 'uncommon',
    level: 20,
    description: 'Thick steel plates offering maximum protection. Movement is somewhat restricted.',
    stats: {
      'Defense': 120,
      'Movement Speed': '-10%',
      'Durability': 200,
      'Physical Resistance': '+15%',
    },
    source: 'Master Blacksmith',
    icon: '🛡️',
    relatedItems: ['steel-helm', 'steel-gauntlets', 'mithril-armor'],
  },
  {
    id: 'pickaxe',
    name: 'Iron Pickaxe',
    category: 'tools',
    type: 'Mining Tool',
    rarity: 'common',
    level: 5,
    description: 'A sturdy pickaxe for extracting ore from rock formations.',
    stats: {
      'Mining Speed': '+15%',
      'Durability': 100,
    },
    source: 'Tool Vendor',
    icon: '⛏️',
    craftingRecipe: {
      materials: [
        { itemId: 'iron-bar', name: 'Iron Bar', quantity: 2 },
        { itemId: 'oak-handle', name: 'Oak Handle', quantity: 1 },
      ],
      station: 'Anvil',
      skillRequired: 5,
    },
    relatedItems: ['steel-pickaxe', 'mining-gloves'],
  },
  {
    id: 'shadow-cloak',
    name: 'Shadow Cloak',
    category: 'cosmetics',
    type: 'Back Cosmetic',
    rarity: 'epic',
    level: 1,
    description: 'A mysterious cloak that seems to absorb light. Wisps of shadow trail behind the wearer.',
    source: 'Shadow Realm Event',
    icon: '🌑',
    relatedItems: ['shadow-hood', 'phantom-boots'],
  },
  {
    id: 'thunder-steed',
    name: 'Thunder Steed',
    category: 'mounts',
    type: 'Ground Mount',
    rarity: 'rare',
    level: 30,
    description: 'A magnificent horse infused with storm essence. Lightning crackles beneath its hooves.',
    stats: {
      'Movement Speed': '+80%',
      'Sprint Speed': '+120%',
      'Stamina': 150,
    },
    source: 'Storm Peak Stables',
    icon: '🐎',
    relatedItems: ['storm-saddle', 'lightning-horseshoes'],
  },
];

export const monsters: Monster[] = [
  {
    id: 'goblin-warrior',
    name: 'Goblin Warrior',
    category: 'monsters',
    type: 'Humanoid',
    level: 5,
    rarity: 'common',
    description: 'A small but fierce goblin equipped with rusty weapons. Often found in groups.',
    location: 'Whispering Woods',
    drops: [
      { itemId: 'iron-sword', name: 'Iron Sword', dropRate: 5 },
      { itemId: 'goblin-ear', name: 'Goblin Ear', dropRate: 80 },
      { itemId: 'rusty-coin', name: 'Rusty Coin', dropRate: 45 },
    ],
    stats: {
      'Health': 150,
      'Attack': 20,
      'Defense': 10,
    },
    icon: '👺',
  },
  {
    id: 'crystal-golem',
    name: 'Crystal Golem',
    category: 'monsters',
    type: 'Elemental',
    level: 30,
    rarity: 'rare',
    description: 'A towering construct of living crystal. Its body resonates with arcane energy.',
    location: 'Starfall Caverns',
    drops: [
      { itemId: 'mithril-sword', name: 'Mithril Longsword', dropRate: 2 },
      { itemId: 'crystal-shard', name: 'Crystal Shard', dropRate: 65 },
      { itemId: 'arcane-dust', name: 'Arcane Dust', dropRate: 40 },
    ],
    stats: {
      'Health': 8500,
      'Attack': 180,
      'Defense': 250,
      'Magic Resistance': 150,
    },
    icon: '💎',
  },
  {
    id: 'elder-dragon',
    name: 'Elder Dragon',
    category: 'monsters',
    type: 'Dragon',
    level: 50,
    rarity: 'legendary',
    description: 'An ancient dragon that has lived for millennia. Its scales are harder than any known metal.',
    location: 'Dragon\'s Peak',
    drops: [
      { itemId: 'dragonbane', name: 'Dragonbane', dropRate: 1 },
      { itemId: 'elder-dragon-scale', name: 'Elder Dragon Scale', dropRate: 15 },
      { itemId: 'dragon-heart', name: 'Dragon Heart', dropRate: 5 },
    ],
    stats: {
      'Health': 500000,
      'Attack': 2500,
      'Defense': 800,
      'Fire Damage': 1500,
    },
    icon: '🐉',
  },
];

export const allItems = [...items, ...monsters] as (GameItem | Monster)[];

export function getItemById(id: string): GameItem | Monster | undefined {
  return allItems.find(item => item.id === id);
}

export function getItemsByCategory(category: CategoryType): (GameItem | Monster)[] {
  return allItems.filter(item => item.category === category);
}

export function searchItems(query: string): (GameItem | Monster)[] {
  const lowerQuery = query.toLowerCase();
  return allItems.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.type.toLowerCase().includes(lowerQuery)
  );
}

export function getRarityColor(rarity: Rarity): string {
  const colors: Record<Rarity, string> = {
    common: 'text-rarity-common',
    uncommon: 'text-rarity-uncommon',
    rare: 'text-rarity-rare',
    epic: 'text-rarity-epic',
    legendary: 'text-rarity-legendary',
  };
  return colors[rarity];
}

export function getRarityBgColor(rarity: Rarity): string {
  const colors: Record<Rarity, string> = {
    common: 'bg-rarity-common/10 border-rarity-common/30',
    uncommon: 'bg-rarity-uncommon/10 border-rarity-uncommon/30',
    rare: 'bg-rarity-rare/10 border-rarity-rare/30',
    epic: 'bg-rarity-epic/10 border-rarity-epic/30',
    legendary: 'bg-rarity-legendary/10 border-rarity-legendary/30',
  };
  return colors[rarity];
}
