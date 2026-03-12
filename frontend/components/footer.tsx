import Link from "next/link";
import { categories } from "@/lib/data";
import { OrnamentDivider } from "./fantasy-decorations";

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-card/30 to-background">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative rune pattern */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 40" className="w-48 h-10 text-primary">
          <path d="M0 20 L20 10 L40 20 L60 10 L80 20 L100 10 L120 20 L140 10 L160 20 L180 10 L200 20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M100 5 L100 35 M85 20 L115 20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              {/* Logo with rune design */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10" />
                <div className="absolute inset-0 rounded-lg border border-primary/30" />
                <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full p-2 text-primary">
                  <path d="M20 5 L25 15 L35 20 L25 25 L20 35 L15 25 L5 20 L15 15 Z" fill="currentColor" opacity="0.3" />
                  <path d="M20 10 L23 16 L30 18 L23 20 L20 26 L17 20 L10 18 L17 16 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl text-foreground leading-none">
                  <span className="text-primary">Heartwood</span> Atlas
                </span>
                <span className="text-[10px] text-muted-foreground/50 font-serif tracking-widest uppercase mt-0.5">Est. Year 1247</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-serif leading-relaxed">
              The most comprehensive archive of knowledge in all the realm. May your journey be ever enlightened.
            </p>
            
            {/* Decorative quill */}
            <div className="mt-6 flex items-center gap-2 text-primary/40">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 4 L4 20 M20 4 C18 8 14 12 10 14 M20 4 C16 6 12 10 10 14 M10 14 L8 20 L14 18" />
              </svg>
              <span className="text-xs font-serif italic">Scribed with care</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-primary/50" fill="currentColor">
                <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
              </svg>
              <h4 className="font-sans font-semibold text-foreground tracking-wide">The Tomes</h4>
            </div>
            <ul className="space-y-3">
              {categories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-serif"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-primary/50" fill="currentColor">
                <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
              </svg>
              <h4 className="font-sans font-semibold text-foreground tracking-wide">Explore</h4>
            </div>
            <ul className="space-y-3">
              {categories.slice(4).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-serif"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-primary/50" fill="currentColor">
                <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" />
              </svg>
              <h4 className="font-sans font-semibold text-foreground tracking-wide">Scrolls</h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-serif"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Search Archives
                </Link>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground/40 font-serif cursor-not-allowed">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                  Scribe&apos;s API (Soon)
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground/40 font-serif cursor-not-allowed">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                  Join the Guild (Soon)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ornamental divider */}
        <OrnamentDivider className="my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/30" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6 L12 12 L16 14" />
            </svg>
            <p className="text-sm text-muted-foreground/70 font-serif">
              Year 2026 of the Common Era &bull; Heartwood Atlas
            </p>
          </div>
          <div className="flex items-center gap-6">
            {/* Status indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-muted-foreground font-serif">Archives Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
