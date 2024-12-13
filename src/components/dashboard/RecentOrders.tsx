import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const orders = [
  {
    id: 'CMD202402001',
    date: '15 Feb 2024',
    status: 'En cours de livraison',
    total: '85.50 TND',
    items: [
      { name: 'Fromage Amir Semi Curé', quantity: 2 },
      { name: 'Mozzarella Centra', quantity: 1 }
    ]
  },
  {
    id: 'CMD202402002',
    date: '10 Feb 2024',
    status: 'Livré',
    total: '45.25 TND',
    items: [
      { name: 'Gouda à l\'ail noir', quantity: 1 }
    ]
  }
];

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Commandes récentes
          </h2>
          <Link 
            to="/dashboard/orders"
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Voir tout
          </Link>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Package className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-gray-900">{order.total}</p>
                <p className="text-sm text-emerald-600">{order.status}</p>
              </div>

              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}