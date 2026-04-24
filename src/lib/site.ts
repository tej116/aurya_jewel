export const site = {
  name: "Aurya Diamonds",
  tagline: "Lab-Grown Diamond Jewellery",
  phone: "+91 94838 08379",
  whatsapp: "+919483808379", // digits only, with country code
  email: "hello@auryadiamonds.com",
  address: "12, Lavelle Road, Bangalore 560001",
  instagram: "https://instagram.com/auryadiamonds",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
