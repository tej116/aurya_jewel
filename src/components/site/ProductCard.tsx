import Link from "next/link";
import type { Product } from "@/data/products";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block overflow-hidden rounded-sm border border-gold-soft/30 bg-card transition-all duration-500 hover:border-primary/60 hover:shadow-luxe"
    >
      <div className="relative aspect-square overflow-hidden bg-[oklch(0.16_0.07_265)]">
        <Image
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.07_265)]/80 via-transparent to-transparent opacity-60" />
        <span className="absolute left-3 top-3 rounded-sm border border-primary/40 bg-background/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
          {product.certification}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {product.carat} · {product.cut}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-primary">
            {product.price ?? "Price on Enquiry"}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/70 group-hover:text-primary">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
