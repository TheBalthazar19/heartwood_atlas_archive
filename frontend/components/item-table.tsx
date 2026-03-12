"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown, Search } from "lucide-react";
import {
  type GameItem,
  type Monster,
  type Rarity,
  getRarityColor,
} from "@/lib/data";

interface ItemTableProps {
  items: (GameItem | Monster)[];
}

type SortField = "name" | "level" | "rarity" | "type";
type SortDirection = "asc" | "desc";

const rarityOrder: Record<Rarity, number> = {
  common: 1,
  uncommon: 2,
  rare: 3,
  epic: 4,
  legendary: 5,
};

export function ItemTable({ items }: ItemTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [rarityFilter, setRarityFilter] = useState<Rarity | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 10;

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let result = [...items];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
      );
    }

    // Rarity filter
    if (rarityFilter !== "all") {
      result = result.filter((item) => item.rarity === rarityFilter);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "level":
          comparison = a.level - b.level;
          break;
        case "rarity":
          comparison = rarityOrder[a.rarity] - rarityOrder[b.rarity];
          break;
        case "type":
          comparison = a.type.localeCompare(b.type);
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return result;
  }, [items, searchQuery, sortField, sortDirection, rarityFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Toolbar with fantasy styling */}
      <div className="fantasy-card rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search with rune decoration */}
          <div className="relative flex-1 group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary transition-colors">
              <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="9" r="6" />
                <path d="M13 13 L17 17" />
                <circle cx="9" cy="9" r="3" strokeDasharray="2 2" opacity="0.5" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search the archives..."
              className="w-full pl-11 pr-4 py-3 bg-background/50 border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/30 transition-all font-serif"
            />
          </div>

          {/* Rarity Filter Buttons */}
          <div className="flex items-center gap-1 flex-wrap">
            {(["all", "common", "uncommon", "rare", "epic", "legendary"] as const).map((rarity) => (
              <button
                key={rarity}
                onClick={() => {
                  setRarityFilter(rarity);
                  setCurrentPage(1);
                }}
                className={`px-3 py-2 text-xs font-sans font-medium uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  rarityFilter === rarity
                    ? rarity === "all"
                      ? "bg-primary text-primary-foreground"
                      : rarity === "legendary"
                      ? "bg-rarity-legendary/20 text-rarity-legendary border border-rarity-legendary/30"
                      : rarity === "epic"
                      ? "bg-rarity-epic/20 text-rarity-epic border border-rarity-epic/30"
                      : rarity === "rare"
                      ? "bg-rarity-rare/20 text-rarity-rare border border-rarity-rare/30"
                      : rarity === "uncommon"
                      ? "bg-rarity-uncommon/20 text-rarity-uncommon border border-rarity-uncommon/30"
                      : "bg-rarity-common/20 text-rarity-common border border-rarity-common/30"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card border border-transparent"
                }`}
              >
                {rarity === "all" ? "All" : rarity}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table with enhanced styling */}
      <div className="parchment-deep rounded-xl overflow-hidden">
        {/* Table header decoration */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
                <th className="px-5 py-4 text-left">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-2 text-sm font-sans font-semibold text-primary/80 hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    <svg viewBox="0 0 16 16" className="w-4 h-4 opacity-50" fill="currentColor">
                      <path d="M8 2 L10 6 L14 7 L10.5 10 L11.5 14 L8 12 L4.5 14 L5.5 10 L2 7 L6 6 Z" />
                    </svg>
                    Entry
                    <SortIcon field="name" />
                  </button>
                </th>
                <th className="px-5 py-4 text-left hidden sm:table-cell">
                  <button
                    onClick={() => handleSort("type")}
                    className="flex items-center gap-1 text-sm font-sans font-semibold text-primary/80 hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    Classification
                    <SortIcon field="type" />
                  </button>
                </th>
                <th className="px-5 py-4 text-left">
                  <button
                    onClick={() => handleSort("level")}
                    className="flex items-center gap-1 text-sm font-sans font-semibold text-primary/80 hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    Power
                    <SortIcon field="level" />
                  </button>
                </th>
                <th className="px-5 py-4 text-left">
                  <button
                    onClick={() => handleSort("rarity")}
                    className="flex items-center gap-1 text-sm font-sans font-semibold text-primary/80 hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    Rarity
                    <SortIcon field="rarity" />
                  </button>
                </th>
                <th className="px-5 py-4 text-left hidden md:table-cell">
                  <span className="text-sm font-sans font-semibold text-primary/80 tracking-wide uppercase">
                    Origin
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b border-border/20 hover:bg-primary/5 transition-all duration-200 group/row ${
                    item.rarity === 'legendary' ? 'hover:bg-rarity-legendary/5' : 
                    item.rarity === 'epic' ? 'hover:bg-rarity-epic/5' : ''
                  }`}
                >
                  <td className="px-5 py-4">
                    <Link
                      href={`/item/${item.id}`}
                      className="flex items-center gap-4 group"
                    >
                      {/* Icon with subtle glow for high rarity */}
                      <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg ${
                        item.rarity === 'legendary' ? 'bg-rarity-legendary/10' :
                        item.rarity === 'epic' ? 'bg-rarity-epic/10' :
                        'bg-card/50'
                      }`}>
                        <span className="text-2xl">{item.icon}</span>
                        {(item.rarity === 'legendary' || item.rarity === 'epic') && (
                          <div className={`absolute inset-0 rounded-lg ${
                            item.rarity === 'legendary' ? 'bg-rarity-legendary/20' : 'bg-rarity-epic/20'
                          } opacity-0 group-hover/row:opacity-100 transition-opacity`} />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-serif font-medium group-hover:underline ${getRarityColor(item.rarity)}`}>
                          {item.name}
                        </span>
                        <span className="text-xs text-muted-foreground/60 font-serif sm:hidden">
                          {item.type}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-sm text-muted-foreground/80 font-serif">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary/70 font-sans font-medium">
                        {item.level}
                      </span>
                      <div className="w-12 h-1 rounded-full bg-border/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary/50 to-primary/80 rounded-full"
                          style={{ width: `${Math.min(item.level, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full border ${
                        item.rarity === 'legendary' 
                          ? 'text-rarity-legendary border-rarity-legendary/30 bg-rarity-legendary/10' 
                          : item.rarity === 'epic'
                          ? 'text-rarity-epic border-rarity-epic/30 bg-rarity-epic/10'
                          : item.rarity === 'rare'
                          ? 'text-rarity-rare border-rarity-rare/30 bg-rarity-rare/10'
                          : item.rarity === 'uncommon'
                          ? 'text-rarity-uncommon border-rarity-uncommon/30 bg-rarity-uncommon/10'
                          : 'text-rarity-common border-rarity-common/30 bg-rarity-common/10'
                      }`}
                    >
                      {(item.rarity === 'legendary' || item.rarity === 'epic') && (
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="currentColor">
                          <path d="M6 0 L7 4 L11 5 L7.5 7.5 L8.5 12 L6 9.5 L3.5 12 L4.5 7.5 L1 5 L5 4 Z" />
                        </svg>
                      )}
                      {item.rarity}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-sm text-muted-foreground/60 font-serif italic">
                      {"source" in item ? item.source : "location" in item ? item.location : "Unknown"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {paginatedItems.length === 0 && (
          <div className="py-16 text-center">
            <svg viewBox="0 0 60 60" className="w-16 h-16 mx-auto mb-4 text-primary/20">
              <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M30 15 L30 45 M15 30 L45 30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
            <p className="text-muted-foreground font-serif text-lg mb-2">
              No entries discovered
            </p>
            <p className="text-muted-foreground/60 font-serif text-sm">
              The archives hold no records matching your search
            </p>
          </div>
        )}
        
        {/* Bottom decoration */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <p className="text-sm text-muted-foreground/70 font-serif">
            Displaying scrolls <span className="text-primary">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
            <span className="text-primary">{Math.min(currentPage * itemsPerPage, filteredItems.length)}</span> of{" "}
            <span className="text-primary">{filteredItems.length}</span> archived entries
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-serif border border-border/50 rounded-lg bg-card/30 hover:bg-card hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 4 L6 8 L10 12" />
              </svg>
              Previous
            </button>
            <div className="flex items-center gap-1 px-2">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 text-sm font-serif rounded-lg transition-all duration-200 ${
                      currentPage === pageNum
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "hover:bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-serif border border-border/50 rounded-lg bg-card/30 hover:bg-card hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Next
              <svg viewBox="0 0 16 16" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 4 L10 8 L6 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
