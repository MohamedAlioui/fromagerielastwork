import React from 'react';
import { AdminLayout } from '../../../layouts/admin/AdminLayout';
import { LoyaltyTierList } from '../../../components/admin/loyalty/LoyaltyTierList';

export function LoyaltyPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Programme de fidélité</h1>
        </div>
        <LoyaltyTierList />
      </div>
    </AdminLayout>
  );
}
