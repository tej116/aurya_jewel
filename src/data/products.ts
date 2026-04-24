import ringImg from "../assets/cat-rings.jpg";
import earringsImg from "../assets/cat-earrings.jpg";
import necklaceImg from "../assets/cat-necklaces.jpg";
import customImg from "../assets/cat-custom.jpg";
import heroNecklace from "../assets/hero-necklace.jpg";
import type { StaticImageData } from "next/image";

export type Category = "rings" | "earrings" | "necklaces" | "custom";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price?: string;
  carat: string;
  clarity: string;
  cut: string;
  metal: string;
  certification: string;
  image: StaticImageData;
  description: string;
};

export const categoryMeta: Record<Category, { title: string; tagline: string; image: StaticImageData }> = {
  rings: {
    title: "Rings",
    tagline: "Solitaires, halos & eternity bands crafted in 18k gold.",
    image: ringImg,
  },
  earrings: {
    title: "Earrings",
    tagline: "Studs, hoops & chandeliers brilliant with lab-grown fire.",
    image: earringsImg,
  },
  necklaces: {
    title: "Necklaces",
    tagline: "Bridal sets & everyday pendants for the modern muse.",
    image: necklaceImg,
  },
  custom: {
    title: "Custom Jewellery",
    tagline: "Bespoke pieces designed alongside our master jewellers.",
    image: customImg,
  },
};

export const products: Product[] = [
  {
    slug: "celestia-solitaire-ring",
    name: "Celestia Solitaire Ring",
    category: "rings",
    price: "₹ 84,500",
    carat: "1.02 ct",
    clarity: "VVS1",
    cut: "Round Brilliant",
    metal: "18k Yellow Gold",
    certification: "IGI Certified",
    image: ringImg,
    description:
      "A six-prong solitaire designed to elevate the brilliance of a single, perfectly proportioned lab-grown diamond. A timeless promise.",
  },
  {
    slug: "lumiere-halo-ring",
    name: "Lumière Halo Ring",
    category: "rings",
    carat: "1.50 ct",
    clarity: "VS1",
    cut: "Cushion",
    metal: "18k Rose Gold",
    certification: "IGI Certified",
    image: heroNecklace,
    description:
      "A cushion-cut centre framed by a delicate halo of pavé diamonds. Sculpted to catch every glance.",
  },
  {
    slug: "azure-chandelier-earrings",
    name: "Azure Chandelier Earrings",
    category: "earrings",
    price: "₹ 1,42,000",
    carat: "4.80 ct total",
    clarity: "VS2",
    cut: "Marquise & Pear",
    metal: "18k Yellow Gold with Sapphire",
    certification: "IGI Certified",
    image: earringsImg,
    description:
      "A bridal statement piece — cascading marquise and pear lab-grown diamonds with sapphire blue accents.",
  },
  {
    slug: "stardust-stud-earrings",
    name: "Stardust Stud Earrings",
    category: "earrings",
    price: "₹ 38,900",
    carat: "0.50 ct each",
    clarity: "VVS2",
    cut: "Round Brilliant",
    metal: "18k White Gold",
    certification: "IGI Certified",
    image: ringImg,
    description: "Everyday luminance. Four-prong studs that pair effortlessly from desk to dinner.",
  },
  {
    slug: "aurelia-bridal-necklace",
    name: "Aurelia Bridal Necklace",
    category: "necklaces",
    carat: "12.40 ct total",
    clarity: "VS1",
    cut: "Mixed",
    metal: "18k Yellow Gold with Blue Sapphire",
    certification: "IGI Certified",
    image: heroNecklace,
    description:
      "Our signature bridal piece — an heirloom of cascading diamond florets and sapphire centres, designed in Bangalore.",
  },
  {
    slug: "etoile-pendant",
    name: "Étoile Pendant",
    category: "necklaces",
    price: "₹ 56,500",
    carat: "0.75 ct",
    clarity: "VVS2",
    cut: "Pear",
    metal: "18k Yellow Gold",
    certification: "IGI Certified",
    image: necklaceImg,
    description: "A solitary pear-cut diamond suspended on a whisper-thin gold chain. Quiet luxury.",
  },
];

export const featuredProducts = products.slice(0, 4);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}
