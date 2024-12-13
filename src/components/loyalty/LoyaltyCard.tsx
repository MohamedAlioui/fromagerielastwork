import React from 'react';
import { Award, Gift, TrendingUp } from 'lucide-react';
import { LoyaltyPoints, LoyaltyTier } from '../../types/loyalty';
import { calculateTier, calculatePointsToNextTier, formatPoints, TIER_BENEFITS } from '../../utils/loyaltyUtils';

const tierColors: Record<LoyaltyTier, { bg: string; text: string; border: string }> = {
  bronze: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
  silver: { bg: 'bg-gray-50', text: 'text-gray-800', border: 'border-gray-200' },
  gold: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200' },
  platinum: { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200' }
};

interface LoyaltyCardProps {
  loyalty: LoyaltyPoints;
}

export function LoyaltyCard({ loyalty }: LoyaltyCardProps) {
  const currentTier = calculateTier(loyalty.total);
  const { nextTier, pointsNeeded } = calculatePointsToNextTier(loyalty.total);
  const colors = tierColors[currentTier];
  const tierBenefits = TIER_BENEFITS.find(t => t.tier === currentTier);

  return (
    <div className={`rounded-lg border ${colors.border} overflow-hidden`}>
      <div className={`${colors.bg} p-6`}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className={`text-lg font-semibold ${colors.text}`}>
              Niveau {currentTier.charAt(0).toUpperCase() + currentTier.slice(1)}
            </h3>
            <p className="text-gray-600">
              {formatPoints(loyalty.total)} points
            </p>
          </div>
          <Award className={`w-12 h-12 ${colors.text}`} />
        </div>

        {nextTier && (
          <div className="mt-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    Prochain niveau: {nextTier}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {formatPoints(pointsNeeded)} points restants
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(loyalty.total / TIER_BENEFITS.find(t => t.tier === nextTier)!.minPoints) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white">
        <h4 className="font-medium text-gray-900 mb-4">Vos avantages actuels</h4>
        <ul className="space-y-3">
          {tierBenefits?.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Gift className="w-4 h-4 mr-2 text-emerald-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}