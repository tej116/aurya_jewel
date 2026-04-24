import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import customImg from "@/assets/cat-custom.jpg";
import heroImg from "@/assets/hero-necklace.jpg";

export const metadata: Metadata = {
  title: "About Aurya — Conscious Diamond Jewellery from Bangalore",
  description: "Aurya is a Bangalore-born atelier of lab-grown diamond jewellery. Modern, ethical luxury from a 2026 house with timeless craftsmanship.",
  openGraph: {
    title: "About Aurya Diamonds",
    description: "Modern, conscious luxury — lab-grown diamond jewellery from Bangalore.",
    images: [{ url: heroImg.src }],
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">
            A new house of <span className="text-gradient-gold italic">conscious luxury</span>
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Aurya was founded in Bangalore with a single belief — that brilliance should never come at a cost. We craft fine jewellery from lab-grown diamonds: real diamonds, identical in beauty and chemistry to their mined counterparts, but created in a way that respects both people and planet.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every Aurya piece is set by hand in 18k gold by master jewellers, accompanied by independent IGI or GIA certification, and backed by our lifetime care promise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-gold opacity-15 blur-3xl" />
          <Image
            src={customImg}
            alt="Aurya master jeweller at work"
            className="relative rounded-sm border border-gold-soft/40 shadow-luxe"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="border-y border-gold-soft/30 bg-[oklch(0.16_0.07_265)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Lab-Grown"
            title="Real Diamonds. Modern Conscience."
            subtitle="Same fire. Same hardness. Same forever — without the human or environmental cost of mining."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Pillar icon={<Sparkles className="h-6 w-6" />} title="Identical Brilliance" text="Chemically and optically identical to mined diamonds. Graded on the same 4Cs scale by IGI and GIA." />
            <Pillar icon={<Leaf className="h-6 w-6" />} title="Ethically Created" text="No mining. No conflict zones. Full traceability from creation to certification." />
            <Pillar icon={<ShieldCheck className="h-6 w-6" />} title="Honestly Priced" text="Lab-grown means you can own a larger, finer stone — without compromising the magic." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-10">
        <SectionHeading title="Founder’s Note" />
        <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-foreground/90 md:text-3xl">
          "We started Aurya for the woman who knows what she wants — beauty without baggage, brilliance with a conscience. Every piece is a quiet statement of modern luxury."
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">— Founder, Aurya Diamonds</p>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
            <Link href="/appointment">Visit our Bangalore Atelier</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-sm border border-gold-soft/30 bg-card p-7 text-center">
      <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
        {icon}
      </div>
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
