"use client";

import { useState } from "react";
import { Calendar as CalIcon, Clock, MapPin, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { site, whatsappLink } from "@/lib/site";

export default function AppointmentPage() {
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const f = new FormData(e.currentTarget);
    const msg = `Hi Aurya, I'd like to book an appointment.
Name: ${f.get("name")}
Phone: ${f.get("phone")}
Date: ${f.get("date")}
Time: ${f.get("time")}
Interest: ${f.get("interest")}
Notes: ${f.get("notes") || "—"}`;

    setTimeout(() => {
      window.open(whatsappLink(msg), "_blank");
      toast.success("Confirming your appointment on WhatsApp…");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <SectionHeading
          eyebrow="Private Visit"
          title="Book Your Appointment"
          subtitle="A one-on-one experience at our Bangalore atelier — by appointment only."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="The Atelier"
              text={site.address}
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Hours"
              text="Monday — Saturday · 11:00 — 20:00"
            />
            <InfoCard
              icon={<Sparkles className="h-5 w-5" />}
              title="What to Expect"
              text="Champagne, a personal stylist, and an unhurried hour with our finest pieces."
            />
            <div className="rounded-sm border border-primary/40 bg-gradient-navy p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Prefer a quick chat?</p>
              <p className="mt-2 font-serif text-xl">Message us on WhatsApp</p>
              <a
                href={whatsappLink("Hi Aurya, I'd like to book an appointment.")}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
              >
                Open WhatsApp →
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-gold-soft/40 bg-card p-8 shadow-soft"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name">
                <Input name="name" required placeholder="Your full name" />
              </Field>
              <Field label="Phone">
                <Input name="phone" required type="tel" placeholder="+91 …" />
              </Field>
              <Field label="Preferred Date">
                <Input name="date" required type="date" min={today} />
              </Field>
              <Field label="Preferred Time">
                <Select name="time" required defaultValue="11:00">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {["11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <div className="md:col-span-2">
                <Field label="I'm interested in">
                  <Select name="interest" defaultValue="bridal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bridal">Bridal jewellery</SelectItem>
                      <SelectItem value="ring">Engagement ring</SelectItem>
                      <SelectItem value="earrings">Earrings</SelectItem>
                      <SelectItem value="necklace">Necklace</SelectItem>
                      <SelectItem value="custom">Custom design</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Anything we should know?">
                  <Textarea name="notes" rows={4} placeholder="Budget range, occasion, inspiration…" />
                </Field>
              </div>
            </div>

            <Button type="submit" size="lg" disabled={submitting} className="mt-7 w-full bg-gradient-gold text-primary-foreground">
              <CalIcon className="mr-2 h-4 w-4" />
              {submitting ? "Confirming…" : "Confirm via WhatsApp"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We’ll confirm your slot within 30 minutes during business hours.
            </p>
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

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-sm border border-gold-soft/30 bg-card p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">{title}</p>
        <p className="mt-1 text-foreground/90">{text}</p>
      </div>
    </div>
  );
}
