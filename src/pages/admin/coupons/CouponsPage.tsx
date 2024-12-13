import React from 'react';
import { AdminLayout } from '../../../layouts/admin/AdminLayout';
import { CouponList } from '../../../components/admin/coupons/CouponList';

export function CouponsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Codes promo</h1>
        </div>
        <CouponList />
      </div>
    </AdminLayout>
  );
}
