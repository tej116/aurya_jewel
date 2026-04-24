import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`}>
      <span className="font-serif text-2xl tracking-[0.18em] text-gradient-gold">AURYA</span>
      <span className="hidden text-[10px] uppercase tracking-[0.4em] text-muted-foreground sm:inline">
        Diamonds
      </span>
    </Link>
  );
}
