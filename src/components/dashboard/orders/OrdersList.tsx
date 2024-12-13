import React from 'react';
import { Package, ChevronRight } from 'lucide-react';

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

export function OrdersList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y divide-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Package className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">{order.total}</p>
                  <p className="text-sm text-emerald-600">{order.status}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="mt-4 pl-12">
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {item.quantity}x {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}