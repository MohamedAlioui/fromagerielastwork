import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { OrdersList } from '../../components/dashboard/orders/OrdersList';
import { OrdersStats } from '../../components/dashboard/orders/OrdersStats';
import { OrdersFilters } from '../../components/dashboard/orders/OrdersFilters';

export function DashboardOrdersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Mes Commandes</h1>
        </div>
        <OrdersStats />
        <OrdersFilters />
        <OrdersList />
      </div>
    </DashboardLayout>
  );
}