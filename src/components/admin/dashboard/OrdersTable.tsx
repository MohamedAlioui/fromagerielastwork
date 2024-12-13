import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Package, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  date: Date;
  total: string;
  status: string;
}

interface OrdersTableProps {
  orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Commandes récentes</h2>
          <button className="text-sm text-emerald-600 hover:text-emerald-700">
            Voir tout
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500">
                <th className="pb-4">Commande</th>
                <th className="pb-4">Client</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Total</th>
                <th className="pb-4">Statut</th>
                <th className="pb-4"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <Package className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-gray-900">{order.id}</span>
                    </div>
                  </td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">
                    {format(order.date, 'dd MMM yyyy', { locale: fr })}
                  </td>
                  <td className="py-4 font-medium">{order.total}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Livré' 
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="p-2 hover:bg-gray-50 rounded-full">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}