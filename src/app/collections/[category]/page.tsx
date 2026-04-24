import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categoryMeta, getProductsByCategory, type Category } from "@/data/products";
import type { Metadata } from "next";

const validCategories: Category[] = ["rings", "earrings", "necklaces", "custom"];

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;
  if (!validCategories.includes(category)) return {};

  const meta = categoryMeta[category];
  const title = `${meta.title} — Lab-Grown Diamond ${meta.title} | Aurya`;

  return {
    title,
    description: meta.tagline,
    openGraph: {
      title,
      description: meta.tagline,
      images: [{ url: meta.image.src }],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;
  if (!validCategories.includes(category)) {
    notFound();
  }

  const meta = categoryMeta[category];
  const products = getProductsByCategory(category);

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-gold-soft/30">
        <Image src={meta.image} alt={meta.title} className="absolute inset-0 h-full w-full object-cover opacity-25" placeholder="blur" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.07_265/0.6)] to-[oklch(0.18_0.07_265)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">The Aurya Collection</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">
            <span className="text-gradient-gold">{meta.title}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{meta.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        {products.length === 0 ? (
          <div className="rounded-sm border border-gold-soft/30 bg-card p-12 text-center">
            <SectionHeading
              title="Bespoke by Appointment"
              subtitle="Our custom pieces are designed in person at our Bangalore atelier."
            />
            <Link
              href="/appointment"
              className="mt-8 inline-block rounded-sm bg-gradient-gold px-8 py-3 text-sm uppercase tracking-[0.25em] text-primary-foreground"
            >
              Book a Design Session
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}
