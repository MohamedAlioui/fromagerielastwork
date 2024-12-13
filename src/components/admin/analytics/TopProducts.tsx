import React from 'react';
import { ChevronRight } from 'lucide-react';

const topProducts = [
  {
    id: 1,
    name: 'Fromage Amir Semi Curé',
    sales: 245,
    revenue: '6,825 TND',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Mozzarella Centra',
    sales: 190,
    revenue: '1,548 TND',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=200&q=80'
  }
];

export function TopProducts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Produits Populaires</h3>
        <button className="text-sm text-emerald-600 hover:text-emerald-700">
          Voir tout
        </button>
      </div>

      <div className="space-y-4">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-emerald-200 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.sales} ventes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-emerald-600">{product.revenue}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}