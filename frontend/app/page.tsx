import { HeroSection } from "@/components/hero-section";
import { CategoryGrid } from "@/components/category-grid";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedItems } from "@/components/featured-items";
import { SectionDivider } from "@/components/fantasy-decorations";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Section transition */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        </div>
        
        <CategoryGrid />
        
        {/* Decorative transition between sections */}
        <SectionDivider />
        
        <FeaturedItems />
        
        {/* Final section transition */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/20" />
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary/30">
                <path d="M20 5 L25 15 L35 20 L25 25 L20 35 L15 25 L5 20 L15 15 Z" fill="currentColor" />
              </svg>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/20" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
