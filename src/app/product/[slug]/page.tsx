import { notFound } from "next/navigation";
import Link from "next/link";
import { Award, Leaf, ShieldCheck, Truck, MessageCircle, Calendar } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  if (!product) return {};

  const title = `${product.name} — Lab-Grown Diamond ${product.cut} | Aurya`;
  return {
    title,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      images: [{ url: product.image.src }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  if (!product) {
    notFound();
  }

  const enquireMsg = `Hi Aurya, I'd like to enquire about ${product.name} (${product.carat}, ${product.cut}).`;

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-10">
        <Link href="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
          ← Back to Maison
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-sm border border-gold-soft/40 bg-[oklch(0.16_0.07_265)] shadow-luxe aspect-[4/5]">
              <Image
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[product.image, product.image, product.image].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-sm border border-gold-soft/30 aspect-square">
                  <Image src={src} alt="" className="h-full w-full object-cover opacity-80" placeholder="blur" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{product.certification}</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-2xl text-gradient-gold">
              {product.price ?? "Price on Enquiry"}
            </p>
            <div className="gold-divider mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 rounded-sm border border-gold-soft/30 bg-card p-6">
              <Spec label="Carat" value={product.carat} />
              <Spec label="Clarity" value={product.clarity} />
              <Spec label="Cut" value={product.cut} />
              <Spec label="Metal" value={product.metal} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
                <a href={whatsappLink(enquireMsg)} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Enquire on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/appointment">
                  <Calendar className="mr-2 h-4 w-4" /> Try in Showroom
                </Link>
              </Button>
            </div>

            <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
              <Perk icon={<Award className="h-4 w-4" />} text="IGI / GIA certificate included with every piece" />
              <Perk icon={<Leaf className="h-4 w-4" />} text="100% lab-grown — ethically created" />
              <Perk icon={<ShieldCheck className="h-4 w-4" />} text="Lifetime warranty & buyback assurance" />
              <Perk icon={<Truck className="h-4 w-4" />} text="Insured complimentary delivery across India" />
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-primary">{label}</dt>
      <dd className="mt-1 font-serif text-lg text-foreground">{value}</dd>
    </div>
  );
}

function Perk({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
