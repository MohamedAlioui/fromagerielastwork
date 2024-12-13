import React from 'react';
import { AdminLayout } from '../../../layouts/admin/AdminLayout';
import { OrderList } from '../../../components/admin/orders/OrderList';
import { OrdersStats } from '../../../components/admin/orders/OrdersStats';
import { OrdersFilters } from '../../../components/admin/orders/OrdersFilters';

export function OrdersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Commandes</h1>
        </div>
        <OrdersStats />
        <OrdersFilters />
        <OrderList />
      </div>
    </AdminLayout>
  );
}