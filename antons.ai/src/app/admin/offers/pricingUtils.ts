const pricingTable = [
  { images: 1, price: 1000 },
  { images: 2, price: 1800 },
  { images: 5, price: 3500 },
  { images: 10, price: 5000 },
  { images: 20, price: 7000 },
  { images: 30, price: 10000 },
];

interface Addons {
  conceptDays?: number;
  rpiCount?: number;
  highResolution?: boolean;
  printSmallCount?: number;
  printLargeCount?: number;
  expressDelivery?: boolean;
  superExpressDelivery?: boolean;
  manualAddons?: { label: string; price: number }[];
}

interface Discounts {
  earlyBird?: boolean;
  studioAntonCredits?: boolean;
}

export function getOfferPrice(
  imageCount: number,
  addons: Addons = {},
  discounts: Discounts = {}
): { price: number; discountedPrice: number; pricePerImage: number; breakdown: { base: number; addons: number; discount: number } } {
  // Base price logic
  let entry = pricingTable[0];
  for (let i = 0; i < pricingTable.length; i++) {
    if (imageCount >= pricingTable[i].images) {
      entry = pricingTable[i];
    }
  }
  let price = entry.price;
  if (imageCount !== entry.images) {
    const next = pricingTable.find((e) => e.images > imageCount);
    if (next) {
      const diff = next.images - entry.images;
      const priceDiff = next.price - entry.price;
      price = entry.price + ((imageCount - entry.images) / diff) * priceDiff;
    }
  }
  // Add-ons pricing
  let addonsTotal = 0;
  if (addons.conceptDays) addonsTotal += addons.conceptDays * 1000;
  if (addons.rpiCount && imageCount >= 10) addonsTotal += (addons.rpiCount - 3) * 0; // RPI3 included at 10 images, extra price configurable
  if (addons.highResolution) addonsTotal += 0; // configurable
  if (addons.printLargeCount) addonsTotal += addons.printLargeCount * 0; // configurable
  if (addons.expressDelivery) addonsTotal += 0; // configurable
  if (addons.superExpressDelivery) addonsTotal += 0; // configurable
  if (addons.manualAddons) addonsTotal += addons.manualAddons.reduce((sum, a) => sum + a.price, 0);
  // Discounts
  let discount = 0;
  if (discounts.earlyBird) discount += 0.1;
  if (discounts.studioAntonCredits) discount += 0.1;
  if (discount > 0.2) discount = 0.2;
  const total = price + addonsTotal;
  const discountedPrice = total * (1 - discount);
  const pricePerImage = discountedPrice / imageCount;
  return {
    price: Math.round(total),
    discountedPrice: Math.round(discountedPrice),
    pricePerImage: Math.round(pricePerImage),
    breakdown: { base: Math.round(price), addons: Math.round(addonsTotal), discount: Math.round(discount * 100) },
  };
}
