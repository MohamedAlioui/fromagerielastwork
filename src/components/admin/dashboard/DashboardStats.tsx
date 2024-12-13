import React from 'react';
import { TrendingUp, Users, ShoppingBag, CreditCard } from 'lucide-react';

const stats = [
  {
    name: 'Ventes totales',
    value: '12,450 TND',
    change: '+12%',
    trend: 'up',
    icon: TrendingUp
  },
  {
    name: 'Nouveaux clients',
    value: '120',
    change: '+8%',
    trend: 'up',
    icon: Users
  },
  {
    name: 'Commandes',
    value: '45',
    change: '+23%',
    trend: 'up',
    icon: ShoppingBag
  },
  {
    name: 'Revenu moyen',
    value: '276 TND',
    change: '+4%',
    trend: 'up',
    icon: CreditCard
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-600"> vs mois dernier</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}