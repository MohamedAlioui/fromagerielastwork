import React from 'react';
import { AnalyticsOverview } from './AnalyticsOverview';
import { SalesChart } from './SalesChart';
import { CustomerMap } from './CustomerMap';
import { TopProducts } from './TopProducts';
import { RecentOrders } from '../orders/RecentOrders';

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
      </div>

      <AnalyticsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <CustomerMap />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts />
        <RecentOrders />
      </div>
    </div>
  );
}
