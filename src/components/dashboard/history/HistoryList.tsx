import React from 'react';
import { Clock, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const history = [
  {
    id: 1,
    type: 'order',
    title: 'Commande CMD202402001',
    description: 'Commande effectuée avec succès',
    date: '15 Feb 2024, 14:30',
    status: 'success'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Paiement reçu',
    description: 'Paiement de 85.50 TND reçu',
    date: '15 Feb 2024, 14:31',
    status: 'success'
  },
  {
    id: 3,
    type: 'shipping',
    title: 'Commande expédiée',
    description: 'Votre commande est en cours de livraison',
    date: '16 Feb 2024, 09:15',
    status: 'pending'
  }
];

export function HistoryList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="divide-y divide-gray-200">
        {history.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${
                item.status === 'success' ? 'bg-emerald-50' : 'bg-amber-50'
              }`}>
                {item.status === 'success' ? (
                  <ArrowDownCircle className="w-6 h-6 text-emerald-600" />
                ) : (
                  <Clock className="w-6 h-6 text-amber-600" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}