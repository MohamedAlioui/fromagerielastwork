import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';

const favorites = [
  {
    id: 1,
    name: 'Fromage Amir Semi Curé',
    price: '27.75 TND',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Mozzarella Centra',
    price: '8.15 TND',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=200&q=80'
  }
];

export function FavoriteProducts() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Produits favoris
          </h2>
          <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Voir tout
          </button>
        </div>

        <div className="space-y-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-emerald-200 transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-emerald-600">{product.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <Button size="sm" className="flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ajouter</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}