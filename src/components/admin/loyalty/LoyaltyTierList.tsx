import React from 'react';
import { Edit, Star, Trophy, Users } from 'lucide-react';
import { Button } from '../../ui/Button';

interface LoyaltyTier {
  id: string;
  name: string;
  icon: typeof Star;
  minPoints: number;
  multiplier: number;
  benefits: string[];
  members: number;
}

const tiers: LoyaltyTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    icon: Star,
    minPoints: 0,
    multiplier: 1,
    benefits: [
      'Gagnez 1 point par tranche de 1 TND',
      'Offre de bienvenue'
    ],
    members: 150
  },
  {
    id: 'silver',
    name: 'Silver',
    icon: Star,
    minPoints: 1000,
    multiplier: 1.2,
    benefits: [
      'Gagnez 1.2 points par tranche de 1 TND',
      'Livraison gratuite dès 80 TND',
      'Offres exclusives'
    ],
    members: 75
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: Trophy,
    minPoints: 2500,
    multiplier: 1.5,
    benefits: [
      'Gagnez 1.5 points par tranche de 1 TND',
      'Livraison gratuite dès 60 TND',
      'Accès prioritaire aux nouveautés',
      'Cadeaux d\'anniversaire'
    ],
    members: 25
  }
];

const tierColors = {
  bronze: 'bg-amber-50 text-amber-700',
  silver: 'bg-gray-50 text-gray-700',
  gold: 'bg-yellow-50 text-yellow-700'
};

export function LoyaltyTierList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tiers.map((tier) => {
        const Icon = tier.icon;
        return (
          <div
            key={tier.id}
            className={`${tierColors[tier.id as keyof typeof tierColors]} rounded-lg p-6`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <p className="text-sm opacity-75">
                  À partir de {tier.minPoints} points
                </p>
              </div>
              <Icon className="w-6 h-6" />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm font-medium mb-2">Multiplicateur</div>
                <div className="text-2xl font-bold">x{tier.multiplier}</div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Avantages</div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Membres</div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{tier.members}</span>
                </div>
              </div>
            </div>

            <Button
              variant="secondary"
              className="w-full flex items-center justify-center space-x-2"
            >
              <Edit className="w-4 h-4" />
              <span>Modifier</span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
