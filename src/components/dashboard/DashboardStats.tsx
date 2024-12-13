import React from 'react';
import { ShoppingBag, Heart, Clock, Star } from 'lucide-react';

const stats = [
  {
    name: 'Commandes totales',
    value: '12',
    icon: ShoppingBag,
    change: '+2 ce mois',
    changeType: 'increase'
  },
  {
    name: 'Produits favoris',
    value: '5',
    icon: Heart,
    change: '+1 cette semaine',
    changeType: 'increase'
  },
  {
    name: 'Dernière commande',
    value: 'Il y a 2 jours',
    icon: Clock,
    change: 'En cours de livraison',
    changeType: 'neutral'
  },
  {
    name: 'Points fidélité',
    value: '150',
    icon: Star,
    change: '+25 dernière commande',
    changeType: 'increase'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-lg md:text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
            <p className={`
              mt-2 text-sm
              ${stat.changeType === 'increase' ? 'text-emerald-600' : 'text-gray-500'}
            `}>
              {stat.change}
            </p>
          </div>
        );
      })}
    </div>
  );
}