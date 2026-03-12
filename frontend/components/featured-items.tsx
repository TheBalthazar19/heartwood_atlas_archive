"use client";

import Link from "next/link";
import { items, getRarityColor, getRarityBgColor } from "@/lib/data";
import { SectionDivider } from "./fantasy-decorations";

export function FeaturedItems() {
  // Get legendary and epic items for featured section
  const featuredItems = items
    .filter((item) => item.rarity === "legendary" || item.rarity === "epic")
    .slice(0, 4);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-card/30 to-background" />
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, oklch(0.75 0.18 55 / 0.1) 0%, transparent 40%),
                            radial-gradient(circle at 70% 50%, oklch(0.6 0.22 300 / 0.08) 0%, transparent 40%)`,
        }}
      />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative crown/star */}
          <div className="flex justify-center mb-4">
            <svg viewBox="0 0 80 40" className="w-20 h-10 text-rarity-legendary">
              <path d="M40 5 L45 15 L55 10 L50 20 L60 25 L45 25 L40 35 L35 25 L20 25 L30 20 L25 10 L35 15 Z" fill="currentColor" opacity="0.3" />
              <path d="M40 10 L43 17 L50 14 L47 20 L55 23 L45 23 L40 30 L35 23 L25 23 L33 20 L30 14 L37 17 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            Legendary <span className="text-rarity-legendary">Artifacts</span>
          </h2>
          
          <SectionDivider className="max-w-lg mx-auto" />
          
          <p className="text-muted-foreground font-serif mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Behold the most <span className="text-rarity-legendary">powerful relics</span> and <span className="text-rarity-epic">mystical treasures</span> 
            <br className="hidden sm:block" />discovered by the realm&apos;s greatest adventurers.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <Link key={item.id} href={`/item/${item.id}`}>
              <div 
                className={`group relative h-full ${item.rarity === 'legendary' ? 'legendary-glow' : item.rarity === 'epic' ? 'epic-glow' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated border glow */}
                <div 
                  className={`absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    item.rarity === 'legendary' 
                      ? 'bg-gradient-to-br from-rarity-legendary/50 via-rarity-legendary/20 to-rarity-legendary/50' 
                      : 'bg-gradient-to-br from-rarity-epic/50 via-rarity-epic/20 to-rarity-epic/50'
                  }`}
                  style={{ filter: 'blur(8px)' }}
                />

                <div className="relative h-full fantasy-card rounded-xl p-6 transition-all duration-300 group-hover:translate-y-[-6px]">
                  {/* Corner flourishes */}
                  <svg viewBox="0 0 40 40" className="absolute top-2 left-2 w-6 h-6 text-primary/20">
                    <path d="M0 20 L10 0 L20 20 L10 10 Z" fill="currentColor" />
                  </svg>
                  <svg viewBox="0 0 40 40" className="absolute top-2 right-2 w-6 h-6 text-primary/20 rotate-90">
                    <path d="M0 20 L10 0 L20 20 L10 10 Z" fill="currentColor" />
                  </svg>
                  
                  {/* Rarity Badge */}
                  <div className="absolute top-3 right-10">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider rounded-full border ${
                        item.rarity === 'legendary' 
                          ? 'text-rarity-legendary border-rarity-legendary/30 bg-rarity-legendary/10' 
                          : 'text-rarity-epic border-rarity-epic/30 bg-rarity-epic/10'
                      }`}
                    >
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
                        <path d="M8 1 L9.5 6 L15 7 L10.5 10.5 L12 16 L8 12.5 L4 16 L5.5 10.5 L1 7 L6.5 6 Z" />
                      </svg>
                      {item.rarity}
                    </span>
                  </div>

                  {/* Icon with magical aura */}
                  <div className="relative w-20 h-20 mb-5 mx-auto">
                    <div className={`absolute inset-0 rounded-full ${
                      item.rarity === 'legendary' 
                        ? 'bg-rarity-legendary/20 animate-pulse' 
                        : 'bg-rarity-epic/20 animate-pulse'
                    }`} style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-2 rounded-full border border-dashed border-primary/20" style={{ animation: 'spin 15s linear infinite' }} />
                    <div className="absolute inset-0 flex items-center justify-center text-5xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Name with glow */}
                  <h3 className={`font-sans text-lg font-bold mb-1 text-center tracking-wide ${getRarityColor(item.rarity)}`}>
                    {item.name}
                  </h3>

                  {/* Type & Level */}
                  <p className="text-xs text-muted-foreground/70 font-serif mb-3 text-center uppercase tracking-widest">
                    {item.type} &bull; Level {item.level}
                  </p>

                  {/* Decorative line */}
                  <div className="w-16 h-px mx-auto mb-3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-serif line-clamp-2 text-center leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats Preview */}
                  {item.stats && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex flex-wrap justify-center gap-2">
                        {Object.entries(item.stats)
                          .slice(0, 2)
                          .map(([key, value]) => (
                            <span
                              key={key}
                              className="text-xs px-2.5 py-1 bg-background/40 rounded-full font-serif border border-border/30"
                            >
                              <span className="text-primary/80">{key}:</span> {value}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            href="/category/weapons"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-sans font-semibold text-primary-foreground overflow-hidden rounded-lg"
          >
            {/* Button background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary transition-all duration-300 group-hover:from-primary/90 group-hover:via-primary group-hover:to-primary/90" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            
            <span className="relative">Enter the Vault</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
