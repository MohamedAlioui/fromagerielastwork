import React from 'react';
import { AdminLayout } from '../../components/admin/layout/AdminLayout';
import { DashboardOverview } from '../../components/admin/dashboard/DashboardOverview';

export function AdminDashboardPage() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  );
}