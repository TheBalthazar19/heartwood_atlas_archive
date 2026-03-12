"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { OrnamentDivider, CompassIcon, GlowingOrb, FloatingParticles } from "./fantasy-decorations";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden scroll-bg">
      {/* Floating magical particles */}
      <FloatingParticles />
      
      {/* Radial glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.75 0.15 80 / 0.15) 0%, transparent 70%),
              radial-gradient(circle at 20% 80%, oklch(0.55 0.12 240 / 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, oklch(0.55 0.12 240 / 0.1) 0%, transparent 40%)
            `,
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, oklch(0.1 0.02 260 / 0.4) 100%)',
        }}
      />

      {/* Decorative corner runes */}
      <div className="absolute top-8 left-8 opacity-20">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-primary">
          <path d="M0 40 L20 0 L40 40 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M10 40 L20 20 L30 40 L20 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-20">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-primary">
          <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-primary">
          <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M40 15 L40 65 M15 40 L65 40" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20">
        <svg viewBox="0 0 80 80" className="w-20 h-20 text-primary">
          <path d="M40 5 L75 40 L40 75 L5 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="currentColor" opacity="0.1" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Compass icon */}
        <div className="flex justify-center mb-6 rune-circle">
          <CompassIcon className="text-primary/60" />
        </div>

        {/* Title with shimmer effect */}
        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
          <span className="text-shimmer">Heartwood</span>
          <span className="text-foreground"> Atlas</span>
        </h1>

        {/* Ornamental divider */}
        <OrnamentDivider className="my-6" />

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl mb-2 max-w-2xl mx-auto font-serif italic">
          &ldquo;Within these pages lies the collected wisdom of ages&rdquo;
        </p>
        <p className="text-primary/60 text-sm font-serif tracking-widest uppercase mb-10">
          A Compendium of the World&apos;s Knowledge
        </p>

        {/* Search Bar with fantasy styling */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Animated glow effect */}
            <div 
              className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, oklch(0.75 0.15 80 / 0.3), oklch(0.55 0.12 240 / 0.2), oklch(0.75 0.15 80 / 0.3))',
                filter: 'blur(20px)',
              }}
            />
            
            {/* Search container */}
            <div className="relative mystical-border rounded-xl overflow-hidden">
              <div className="flex items-center bg-card/90 backdrop-blur-sm">
                {/* Decorative left element */}
                <div className="hidden sm:flex items-center pl-4 pr-2 border-r border-border/30">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
                
                <div className="flex-1 flex items-center">
                  <Search className="w-5 h-5 ml-4 sm:ml-3 text-primary/70" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Seek knowledge within the Atlas..."
                    className="flex-1 px-4 py-4 bg-transparent text-foreground placeholder:text-muted-foreground/70 focus:outline-none font-serif text-lg"
                  />
                </div>
                
                <button
                  type="submit"
                  className="m-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-sans font-semibold rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/20"
                >
                  <span className="hidden sm:inline">Search</span>
                  <Search className="w-5 h-5 sm:hidden" />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Stats with glowing orbs */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm">
          <div className="flex flex-col items-center gap-2 group">
            <div className="flex items-center gap-2">
              <GlowingOrb color="primary" />
              <span className="text-primary font-sans font-bold text-2xl">4,929</span>
            </div>
            <span className="text-muted-foreground font-serif text-xs uppercase tracking-widest">Entries Recorded</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
          
          <div className="flex flex-col items-center gap-2 group">
            <div className="flex items-center gap-2">
              <GlowingOrb color="accent" />
              <span className="text-accent font-sans font-bold text-2xl">8</span>
            </div>
            <span className="text-muted-foreground font-serif text-xs uppercase tracking-widest">Ancient Tomes</span>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
          
          <div className="flex flex-col items-center gap-2 group">
            <div className="flex items-center gap-2">
              <GlowingOrb color="legendary" />
              <span className="text-rarity-legendary font-sans font-bold text-2xl">Daily</span>
            </div>
            <span className="text-muted-foreground font-serif text-xs uppercase tracking-widest">Inscriptions</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 animate-bounce">
          <span className="text-xs font-serif tracking-widest uppercase">Explore</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5 L12 19 M5 12 L12 19 L19 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
