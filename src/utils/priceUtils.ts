export function calculateDiscount(amount: number, discountPercentage: number): number {
  return (amount * discountPercentage) / 100;
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2)} TND`;
}

export function parsePrice(priceString: string): number {
  if (!priceString) return 0;
  const matches = priceString.match(/(\d+([.,]\d+)?)/);
  return matches ? parseFloat(matches[0].replace(',', '.')) : 0;
}