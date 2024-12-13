import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { LoyaltyOverview } from '../../components/loyalty/LoyaltyOverview';

export function DashboardLoyaltyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Points Fidélité</h1>
        </div>
        <LoyaltyOverview />
      </div>
    </DashboardLayout>
  );
}