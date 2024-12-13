import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { AddressList } from '../../components/dashboard/addresses/AddressList';
import { AddressForm } from '../../components/dashboard/addresses/AddressForm';

export function DashboardAddressesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Mes Adresses</h1>
        </div>
        <AddressList />
        <AddressForm />
      </div>
    </DashboardLayout>
  );
}