import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          {/* Icon */}
          <div className="text-8xl mb-6">📜</div>

          {/* Title */}
          <h1 className="font-sans text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">404</span> - Page Not Found
          </h1>

          {/* Description */}
          <p className="text-muted-foreground font-serif text-lg max-w-md mx-auto mb-8">
            The ancient scrolls contain no record of this page. Perhaps it has
            been lost to time, or maybe it never existed at all.
          </p>

          {/* Decorative divider */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rotate-45 bg-primary/50" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground font-sans font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 border border-border text-foreground font-sans font-semibold rounded-lg hover:bg-card transition-colors"
            >
              Search the Atlas
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
