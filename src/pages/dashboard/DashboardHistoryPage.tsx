import React from 'react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { HistoryList } from '../../components/dashboard/history/HistoryList';
import { HistoryFilters } from '../../components/dashboard/history/HistoryFilters';

export function DashboardHistoryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Historique</h1>
        </div>
        <HistoryFilters />
        <HistoryList />
      </div>
    </DashboardLayout>
  );
}