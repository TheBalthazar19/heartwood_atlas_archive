import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ItemDetailCard } from "@/components/item-detail-card";
import { RelatedItems } from "@/components/related-items";
import {
  getItemById,
  categories,
  allItems,
  type GameItem,
  type Monster,
} from "@/lib/data";

interface ItemPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ItemPageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    return { title: "Item Not Found | Heartwood Atlas" };
  }

  return {
    title: `${item.name} | Heartwood Atlas`,
    description: item.description,
  };
}

export default async function ItemPage({ params }: ItemPageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  const category = categories.find((c) => c.id === item.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: category?.name || item.category,
                href: `/category/${item.category}`,
              },
              { label: item.name, href: `/item/${item.id}` },
            ]}
          />

          {/* Main Content */}
          <div className="mt-8">
            <ItemDetailCard item={item} />
          </div>

          {/* Related Items */}
          {"relatedItems" in item && item.relatedItems && item.relatedItems.length > 0 && (
            <div className="mt-12">
              <RelatedItems itemIds={item.relatedItems} />
            </div>
          )}

          {/* Dropped By Section for Monsters */}
          {"drops" in item && (
            <div className="mt-12">
              <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
                Loot Table
              </h2>
              <div className="parchment rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-foreground">
                        Item
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-sans font-semibold text-foreground">
                        Drop Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(item as Monster).drops.map((drop) => (
                      <tr
                        key={drop.itemId}
                        className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <Link
                            href={`/item/${drop.itemId}`}
                            className="text-primary hover:underline font-serif"
                          >
                            {drop.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${drop.dropRate}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground font-serif">
                              {drop.dropRate}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return allItems.map((item) => ({
    id: item.id,
  }));
}
