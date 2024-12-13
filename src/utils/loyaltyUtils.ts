import { LoyaltyTier, TierBenefits } from '../types/loyalty';

export const TIER_BENEFITS: TierBenefits[] = [
  {
    tier: 'bronze',
    minPoints: 0,
    multiplier: 1,
    benefits: [
      'Gagnez 1 point par tranche de 1 TND',
      'Offre de bienvenue'
    ]
  },
  {
    tier: 'silver',
    minPoints: 1000,
    multiplier: 1.2,
    benefits: [
      'Gagnez 1.2 points par tranche de 1 TND',
      'Livraison gratuite dès 80 TND',
      'Offres exclusives'
    ]
  },
  {
    tier: 'gold',
    minPoints: 2500,
    multiplier: 1.5,
    benefits: [
      'Gagnez 1.5 points par tranche de 1 TND',
      'Livraison gratuite dès 60 TND',
      'Accès prioritaire aux nouveautés',
      'Cadeaux d\'anniversaire'
    ]
  },
  {
    tier: 'platinum',
    minPoints: 5000,
    multiplier: 2,
    benefits: [
      'Gagnez 2 points par tranche de 1 TND',
      'Livraison gratuite sans minimum',
      'Service client dédié',
      'Invitations aux événements VIP',
      'Offres personnalisées'
    ]
  }
];

export function calculateTier(points: number): LoyaltyTier {
  if (points >= 5000) return 'platinum';
  if (points >= 2500) return 'gold';
  if (points >= 1000) return 'silver';
  return 'bronze';
}

export function calculatePointsToNextTier(points: number): { nextTier: LoyaltyTier | null; pointsNeeded: number } {
  const currentTier = calculateTier(points);
  const currentTierIndex = TIER_BENEFITS.findIndex(tier => tier.tier === currentTier);
  
  if (currentTierIndex === TIER_BENEFITS.length - 1) {
    return { nextTier: null, pointsNeeded: 0 };
  }

  const nextTier = TIER_BENEFITS[currentTierIndex + 1];
  return {
    nextTier: nextTier.tier,
    pointsNeeded: nextTier.minPoints - points
  };
}

export function formatPoints(points: number): string {
  return points.toLocaleString('fr-FR');
}