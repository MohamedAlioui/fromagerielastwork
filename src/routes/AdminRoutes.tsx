import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '../layouts/admin/AdminLayout';
import { DashboardPage } from '../pages/admin/DashboardPage';
import { ProductsPage } from '../pages/admin/products/ProductsPage';
import { OrdersPage } from '../pages/admin/orders/OrdersPage';
import { CustomersPage } from '../pages/admin/customers/CustomersPage';
import { ReviewsPage } from '../pages/admin/reviews/ReviewsPage';
import { LoyaltyPage } from '../pages/admin/loyalty/LoyaltyPage';
import { CouponsPage } from '../pages/admin/coupons/CouponsPage';
import { SettingsPage } from '../pages/admin/settings/SettingsPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <DashboardPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/products/*" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <ProductsPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/orders/*" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <OrdersPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/customers" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <CustomersPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/reviews" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <ReviewsPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/loyalty" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <LoyaltyPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/coupons" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <CouponsPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/settings" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout>
            <SettingsPage />
          </AdminLayout>
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}