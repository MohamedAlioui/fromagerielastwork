import React from 'react';
import { AdminLayout } from '../../../components/admin/layout/AdminLayout';
import { ProductsOverview } from '../../../components/admin/products/ProductsOverview';

export function AdminProductsPage() {
  return (
    <AdminLayout>
      <ProductsOverview />
    </AdminLayout>
  );
}