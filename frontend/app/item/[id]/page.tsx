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
  type GameItem,
} from "@/lib/data";
import { getAllItemIds } from "@/lib/data";

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
    description: item.description || item.name,
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
              {
                label: item.name,
                href: `/item/${id}`,
              },
            ]}
          />

          {/* Main Item Card */}
          <div className="mt-8">
            <ItemDetailCard item={item} />
          </div>

          {/* Related Items */}
          {"relatedItems" in item &&
            item.relatedItems &&
            item.relatedItems.length > 0 && (
              <div className="mt-12">
                <RelatedItems itemIds={item.relatedItems} />
              </div>
            )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return getAllItemIds();
}