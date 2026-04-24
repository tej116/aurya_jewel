"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { site, whatsappLink } from "@/lib/site";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const msg = `Hi Aurya, I'm ${data.get("name")} (${data.get("phone")}). ${data.get("message")}`;
    setTimeout(() => {
      window.open(whatsappLink(msg), "_blank");
      toast.success("Opening WhatsApp to send your enquiry…");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <SectionHeading
          eyebrow="In Touch"
          title="Speak with the Maison"
          subtitle="Our concierge is available six days a week. Reach us in the way that suits you best."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="WhatsApp"
              line={site.phone}
              href={whatsappLink("Hi Aurya, I'd like to enquire about your collection.")}
              cta="Chat now"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              line={site.phone}
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              cta="Mon — Sat, 11am to 8pm"
            />
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Write to us"
              line={site.email}
              href={`mailto:${site.email}`}
              cta="Replies within 24 hours"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Visit"
              line={site.address}
              href="https://maps.google.com"
              cta="By appointment, walk-ins welcome"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-gold-soft/40 bg-card p-8 shadow-soft"
          >
            <h3 className="font-serif text-2xl">Send an Enquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us what you’re looking for — we’ll respond on WhatsApp within minutes.
            </p>

            <div className="mt-6 grid gap-5">
              <Field label="Name">
                <Input name="name" required placeholder="Your full name" />
              </Field>
              <Field label="Phone">
                <Input name="phone" required type="tel" placeholder="+91 …" />
              </Field>
              <Field label="What you're looking for">
                <Textarea name="message" required rows={5} placeholder="A solitaire ring, custom necklace…" />
              </Field>
              <Button type="submit" size="lg" disabled={submitting} className="bg-gradient-gold text-primary-foreground">
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending…" : "Send via WhatsApp"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-[0.25em] text-primary">{label}</Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  line,
  href,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  line: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start gap-4 rounded-sm border border-gold-soft/30 bg-card p-6 transition-all hover:border-primary/60 hover:shadow-luxe"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">{title}</p>
        <p className="mt-1 font-serif text-xl text-foreground group-hover:text-primary">{line}</p>
        <p className="mt-1 text-xs text-muted-foreground">{cta}</p>
      </div>
    </a>
  );
}
