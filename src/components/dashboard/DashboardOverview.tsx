import React from 'react';
import { DashboardStats } from './DashboardStats';
import { RecentOrders } from './RecentOrders';
import { FavoriteProducts } from './FavoriteProducts';

export function DashboardOverview() {
  return (
    <div className="space-y-6 md:space-y-8">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <RecentOrders />
        <FavoriteProducts />
      </div>
    </div>
  );
}