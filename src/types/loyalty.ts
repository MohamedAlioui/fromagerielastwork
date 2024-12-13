export interface LoyaltyPoints {
  total: number;
  history: LoyaltyTransaction[];
  tier: LoyaltyTier;
}

export interface LoyaltyTransaction {
  id: string;
  date: string;
  points: number;
  type: 'earn' | 'redeem';
  description: string;
  orderId?: string;
}

export type LoyaltyTier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface TierBenefits {
  tier: LoyaltyTier;
  minPoints: number;
  multiplier: number;
  benefits: string[];
}