import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CategorySidebar } from "@/components/category-sidebar";
import { ItemTable } from "@/components/item-table";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  categories,
  getItemsByCategory,
  type CategoryType,
} from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  
  if (!category) {
    return { title: "Category Not Found | Heartwood Atlas" };
  }

  return {
    title: `${category.name} | Heartwood Atlas`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);

  if (!category) {
    notFound();
  }

  const items = getItemsByCategory(slug as CategoryType);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.name, href: `/category/${category.id}` },
            ]}
          />

          {/* Page Header */}
          <div className="mb-8 mt-6">
            <h1 className="font-sans text-4xl font-bold text-foreground mb-2">
              {category.name}
            </h1>
            <p className="text-muted-foreground font-serif">
              {category.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground font-serif">
              <span>
                <span className="text-primary font-sans font-semibold">
                  {items.length}
                </span>{" "}
                entries found
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <CategorySidebar currentCategory={slug as CategoryType} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <ItemTable items={items} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}
