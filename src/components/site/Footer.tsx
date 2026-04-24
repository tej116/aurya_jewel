import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold-soft/30 bg-[oklch(0.16_0.07_265)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Modern, conscious luxury. Lab-grown diamond jewellery, IGI certified, crafted in Bangalore.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-gold-soft"
          >
            <Instagram className="h-4 w-4" /> @auryadiamonds
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Collections</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/collections/rings" className="hover:text-primary">Rings</Link></li>
            <li><Link href="/collections/earrings" className="hover:text-primary">Earrings</Link></li>
            <li><Link href="/collections/necklaces" className="hover:text-primary">Necklaces</Link></li>
            <li><Link href="/collections/custom" className="hover:text-primary">Custom Jewellery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">House</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link href="/appointment" className="hover:text-primary">Book Appointment</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {site.address}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {site.phone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-soft/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Aurya Diamonds. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">IGI · GIA Certified</p>
        </div>
      </div>
    </footer>
  );
}
