import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Sparkles, ShieldCheck, Award, Leaf } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { featuredProducts, categoryMeta } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import Image from "next/image";
import heroImg from "@/assets/hero-necklace.jpg";

export const metadata: Metadata = {
  title: "Aurya Diamonds — Lab-Grown Diamond Jewellery in Bangalore",
  description: "Aurya Diamonds crafts modern, IGI certified lab-grown diamond rings, earrings & necklaces in Bangalore. Ethical luxury, conscious brilliance.",
  openGraph: {
    title: "Aurya Diamonds — Lab-Grown Diamond Jewellery",
    description: "Modern, conscious luxury. IGI certified lab-grown diamonds, crafted in Bangalore.",
    // Next.js static imports have a src property
    images: [{ url: heroImg.src }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background-image:var(--gradient-radial-gold)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-32">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-primary">
              <Sparkles className="h-3 w-3" /> A 2026 House of Diamonds
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Brilliance,
              <br />
              <span className="text-gradient-gold italic">consciously</span> crafted.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aurya is a Bangalore atelier of lab-grown diamond jewellery — IGI certified, ethically created, and designed for the modern muse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                <Link href="/collections/necklaces">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/appointment">
                  <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold-soft/30 pt-8">
              <Stat icon={<Award className="h-5 w-5" />} label="IGI · GIA" sub="Certified" />
              <Stat icon={<Leaf className="h-5 w-5" />} label="100%" sub="Ethical Origin" />
              <Stat icon={<ShieldCheck className="h-5 w-5" />} label="Lifetime" sub="Warranty" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-sm border border-gold-soft/40 shadow-luxe">
              <Image
                src={heroImg}
                alt="Aurya Aurelia bridal lab-grown diamond necklace"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.16_0.07_265)] via-[oklch(0.16_0.07_265/0.6)] to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature Piece</p>
                <p className="mt-1 font-serif text-2xl">Aurelia Bridal Necklace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Atelier"
          title="Curated Collections"
          subtitle="Four houses of design — each piece set by hand in 18k gold."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>).map((key) => {
            const c = categoryMeta[key];
            return (
              <Link
                key={key}
                href={`/collections/${key}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-sm border border-gold-soft/30"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.07_265)] via-[oklch(0.16_0.07_265/0.3)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">Discover →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Maison Favourites"
          title="Pieces Worth Keeping"
          subtitle="A selection from this season's atelier."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-gold-soft/30 bg-[oklch(0.16_0.07_265)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-10">
          <TrustBlock
            icon={<Award className="h-6 w-6" />}
            title="IGI & GIA Certified"
            text="Every Aurya diamond is independently graded for cut, clarity, colour and carat."
          />
          <TrustBlock
            icon={<Leaf className="h-6 w-6" />}
            title="Conscious Luxury"
            text="Lab-grown means real diamonds, with zero mining impact and full traceability."
          />
          <TrustBlock
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Lifetime Care"
            text="Complimentary cleaning, polishing and resizing for every Aurya piece."
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Spoken For" title="Words from our Patrons" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-sm border border-gold-soft/30 bg-card p-7 shadow-soft"
            >
              <div className="mb-3 text-primary">{"★★★★★"}</div>
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                — {t.name}, {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-sm border border-primary/40 bg-gradient-navy p-10 text-center shadow-luxe md:p-16">
          <div className="pointer-events-none absolute inset-0 [background-image:var(--gradient-radial-gold)] opacity-60" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Visit the Maison</p>
            <h3 className="mt-3 font-serif text-3xl md:text-5xl">
              Experience Aurya in <span className="text-gradient-gold italic">Bangalore</span>
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Step into our private gallery on Lavelle Road. Try on signature pieces or design a bespoke creation alongside our master jewellers.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
                <Link href="/appointment">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappLink("Hi Aurya, I'd like to enquire.")} target="_blank" rel="noreferrer">
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

const testimonials = [
  {
    quote: "The craftsmanship is breathtaking. My Aurelia necklace felt like an heirloom from the moment I held it.",
    name: "Aanya Mehta",
    city: "Mumbai",
  },
  {
    quote: "Beautiful design, transparent pricing and a brilliant team. The bridal set exceeded every expectation.",
    name: "Riya Reddy",
    city: "Bangalore",
  },
  {
    quote: "Lab-grown without compromise. The fire on these stones is genuinely extraordinary.",
    name: "Karan Shah",
    city: "Delhi",
  },
];

function Stat({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div>
      <div className="mb-2 text-primary">{icon}</div>
      <p className="font-serif text-xl text-foreground">{label}</p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{sub}</p>
    </div>
  );
}

function TrustBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
        {icon}
      </div>
      <h4 className="font-serif text-xl">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
