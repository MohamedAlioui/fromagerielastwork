import React from 'react';
import { AdminLayout } from '../../../layouts/admin/AdminLayout';
import { ReviewList } from '../../../components/admin/reviews/ReviewList';

export function ReviewsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Avis clients</h1>
        </div>
        <ReviewList />
      </div>
    </AdminLayout>
  );
}
