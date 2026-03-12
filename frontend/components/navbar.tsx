"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/lib/data";
import { SearchDropdown } from "./search-dropdown";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo mark with rune design */}
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 group-hover:from-primary/40 group-hover:to-primary/20 transition-colors" />
              <div className="absolute inset-0 rounded-lg border border-primary/30 group-hover:border-primary/50 transition-colors" />
              <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full p-1.5 text-primary">
                <path d="M18 4 L22 14 L32 18 L22 22 L18 32 L14 22 L4 18 L14 14 Z" fill="currentColor" opacity="0.3" />
                <path d="M18 8 L20 14 L26 16 L20 18 L18 24 L16 18 L10 16 L16 14 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-sans font-bold text-lg text-foreground leading-none tracking-wide">
                <span className="text-primary">Heartwood</span> Atlas
              </span>
              <span className="text-[10px] text-muted-foreground/60 font-serif tracking-widest uppercase">Game Compendium</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Decorative separator */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-border to-transparent mr-4" />
            
            {categories.slice(0, 6).map((category, index) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="relative px-3 py-2 text-sm font-serif text-muted-foreground hover:text-primary transition-all duration-300 rounded-lg group"
              >
                {/* Hover underline effect */}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {category.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-serif text-muted-foreground hover:text-primary transition-colors rounded-lg">
                More
                <svg viewBox="0 0 16 16" className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6 L8 10 L12 6" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-52 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {/* Dropdown glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                {categories.slice(6).map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-serif text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors border-b border-border/30 last:border-0"
                  >
                    <svg viewBox="0 0 16 16" className="w-4 h-4 text-primary/40" fill="currentColor">
                      <path d="M8 2 L9 6 L13 7 L9.5 9.5 L10.5 14 L8 11.5 L5.5 14 L6.5 9.5 L3 7 L7 6 Z" />
                    </svg>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Decorative separator */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-border to-transparent ml-2" />
          </div>

          {/* Search and Menu */}
          <div className="flex items-center gap-2">
            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <SearchDropdown />
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-card"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-card"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <SearchDropdown fullWidth />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-serif text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-card"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
