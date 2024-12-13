import React from 'react';
import { LoyaltyCard } from './LoyaltyCard';
import { LoyaltyHistory } from './LoyaltyHistory';
import { LoyaltyPoints } from '../../types/loyalty';

const mockLoyaltyData: LoyaltyPoints = {
  total: 1250,
  tier: 'silver',
  history: [
    {
      id: '1',
      date: '15 Feb 2024',
      points: 150,
      type: 'earn',
      description: 'Commande #CMD202402001',
      orderId: 'CMD202402001'
    },
    {
      id: '2',
      date: '10 Feb 2024',
      points: 500,
      type: 'earn',
      description: 'Bonus de bienvenue'
    },
    {
      id: '3',
      date: '05 Feb 2024',
      points: 200,
      type: 'redeem',
      description: 'Réduction sur commande #CMD202402002',
      orderId: 'CMD202402002'
    }
  ]
};

export function LoyaltyOverview() {
  return (
    <div className="space-y-8">
      <LoyaltyCard loyalty={mockLoyaltyData} />
      <LoyaltyHistory transactions={mockLoyaltyData.history} />
    </div>
  );
}