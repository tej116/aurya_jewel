import type { Metadata } from "next";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import "../styles.css";

export const metadata: Metadata = {
  title: "Aurya Diamonds",
  description: "Lab-Grown Diamond Jewellery",
  authors: [{ name: "Aurya Diamonds" }],
  openGraph: {
    title: "Aurya Diamonds",
    description: "Lab-Grown Diamond Jewellery",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@AuryaDiamonds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
