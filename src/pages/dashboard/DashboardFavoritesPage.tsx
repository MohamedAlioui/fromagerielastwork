import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { FavoritesList } from '../../components/dashboard/favorites/FavoritesList';

export function DashboardFavoritesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Mes Favoris</h1>
        </div>
        <FavoritesList />
      </div>
    </DashboardLayout>
  );
}