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
} from "lucide-react";
import { categories, type Category } from "@/lib/data";
import { SectionDivider, CornerOrnament } from "./fantasy-decorations";

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

function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = iconMap[category.icon] || Package;

  return (
    <Link href={`/category/${category.id}`}>
      <div 
        className="group relative h-full"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Animated glow border effect */}
        <div 
          className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, oklch(0.75 0.15 80 / 0.4), oklch(0.55 0.12 240 / 0.2), oklch(0.75 0.15 80 / 0.4))',
            filter: 'blur(8px)',
          }}
        />
        
        {/* Card content */}
        <div className="relative h-full fantasy-card rounded-xl p-6 transition-all duration-300 group-hover:translate-y-[-4px]">
          {/* Corner decorations */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
          
          {/* Icon with rune circle */}
          <div className="relative w-16 h-16 mb-5">
            {/* Rotating rune circle */}
            <div className="absolute inset-0 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
            <div 
              className="absolute inset-1 rounded-full border border-dashed border-primary/10 group-hover:border-primary/30 transition-colors duration-300"
              style={{ animation: 'spin 20s linear infinite' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-sans text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 tracking-wide">
            {category.name}
          </h3>

          {/* Decorative line */}
          <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent mb-3 group-hover:w-20 transition-all duration-300" />

          {/* Description */}
          <p className="text-muted-foreground text-sm font-serif mb-4 line-clamp-2 leading-relaxed">
            {category.description}
          </p>

          {/* Count with icon */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-primary/50" fill="currentColor">
                <path d="M8 1 L9.5 6 L15 7 L10.5 10.5 L12 16 L8 12.5 L4 16 L5.5 10.5 L1 7 L6.5 6 Z" />
              </svg>
              <span className="text-sm text-primary/80 font-sans font-medium">
                {category.count.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground font-serif">entries</span>
            </div>
            
            {/* Arrow indicator */}
            <div className="flex items-center gap-1 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
              <span className="text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">Enter</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CategoryGrid() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, oklch(0.75 0.15 80 / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative top element */}
          <div className="flex justify-center mb-4">
            <svg viewBox="0 0 60 30" className="w-16 h-8 text-primary/40">
              <path d="M0 25 Q15 25 20 15 Q25 5 30 5 Q35 5 40 15 Q45 25 60 25" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="5" r="3" fill="currentColor" />
            </svg>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            The <span className="text-shimmer">Ancient Tomes</span>
          </h2>
          
          <SectionDivider className="max-w-lg mx-auto" />
          
          <p className="text-muted-foreground font-serif mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Eight sacred volumes containing the accumulated wisdom of generations. 
            <span className="text-primary/80"> Choose your path wisely, adventurer.</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
