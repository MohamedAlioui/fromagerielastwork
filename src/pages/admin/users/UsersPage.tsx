import React from 'react';
import { AdminLayout } from '../../../components/admin/layout/AdminLayout';
import { UsersOverview } from '../../../components/admin/users/UsersOverview';

export function AdminUsersPage() {
  return (
    <AdminLayout>
      <UsersOverview />
    </AdminLayout>
  );
}