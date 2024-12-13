export const SHIPPING = {
  freeShippingThreshold: 100,
  standardShippingCost: 7
};

export const LOYALTY = {
  pointsPerDinar: 1,
  minRedeemPoints: 500,
  tiers: {
    bronze: { min: 0, multiplier: 1 },
    silver: { min: 1000, multiplier: 1.2 },
    gold: { min: 2500, multiplier: 1.5 },
    platinum: { min: 5000, multiplier: 2 }
  }
};

export const ORDER_STATUS = {
  pending: 'En attente',
  processing: 'En cours',
  shipped: 'Expédié',
  delivered: 'Livré',
  cancelled: 'Annulé'
} as const;