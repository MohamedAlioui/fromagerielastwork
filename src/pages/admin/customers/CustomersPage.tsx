import React from 'react';
import { AdminLayout } from '../../../layouts/admin/AdminLayout';
import { CustomerList } from '../../../components/admin/customers/CustomerList';

export function CustomersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Clients</h1>
        </div>
        <CustomerList />
      </div>
    </AdminLayout>
  );
}
