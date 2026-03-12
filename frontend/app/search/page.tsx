"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ItemTable } from "@/components/item-table";
import { searchItems } from "@/lib/data";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? searchItems(query) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ]}
      />

      {/* Header */}
      <div className="mb-8 mt-6">
        <h1 className="font-sans text-4xl font-bold text-foreground mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-muted-foreground font-serif">
            Showing results for &ldquo;
            <span className="text-primary">{query}</span>&rdquo;
          </p>
        )}
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground font-serif">
          <span>
            <span className="text-primary font-sans font-semibold">
              {results.length}
            </span>{" "}
            {results.length === 1 ? "entry" : "entries"} found
          </span>
        </div>
      </div>

      {/* Results */}
      {query ? (
        results.length > 0 ? (
          <ItemTable items={results} />
        ) : (
          <div className="parchment rounded-xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
              No results found
            </h2>
            <p className="text-muted-foreground font-serif max-w-md mx-auto">
              We couldn&apos;t find any items matching &ldquo;{query}&rdquo;. Try adjusting
              your search terms or browse our categories.
            </p>
          </div>
        )
      ) : (
        <div className="parchment rounded-xl p-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
            Enter a search term
          </h2>
          <p className="text-muted-foreground font-serif max-w-md mx-auto">
            Use the search bar above to find items, weapons, monsters, and more
            in the Heartwood Atlas.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-8">
              <div className="animate-pulse">
                <div className="h-8 w-48 bg-card rounded mb-4" />
                <div className="h-4 w-64 bg-card rounded mb-8" />
                <div className="h-96 bg-card rounded-xl" />
              </div>
            </div>
          }
        >
          <SearchContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
