import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const stats = [
  {
    name: 'Total commandes',
    value: '45',
    icon: Package,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    name: 'En attente',
    value: '12',
    icon: Clock,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    name: 'Livrées',
    value: '30',
    icon: CheckCircle,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    name: 'Annulées',
    value: '3',
    icon: XCircle,
    color: 'bg-red-50 text-red-600'
  }
];

export function OrdersStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}