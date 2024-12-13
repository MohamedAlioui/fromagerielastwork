import React from 'react';
import { OrderList } from './OrderList';
import { OrderStats } from './OrderStats';

export function OrdersOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Orders Management</h1>
      </div>
      <OrderStats />
      <OrderList />
    </div>
  );
}