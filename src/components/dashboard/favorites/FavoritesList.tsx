import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../../ui/Button';

const favorites = [
  {
    id: 1,
    name: 'Fromage Amir Semi Curé',
    price: '27.75 TND',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=200&q=80',
    inStock: true
  },
  {
    id: 2,
    name: 'Mozzarella Centra',
    price: '8.15 TND',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=200&q=80',
    inStock: true
  }
];

export function FavoritesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="text-emerald-600 font-medium mt-1">{product.price}</p>
            
            <div className="mt-4 flex gap-2">
              <Button
                variant="secondary"
                className="flex-1 flex items-center justify-center space-x-2"
                onClick={() => {}}
              >
                <Heart className="w-4 h-4" />
                <span>Retirer</span>
              </Button>
              <Button
                className="flex-1 flex items-center justify-center space-x-2"
                onClick={() => {}}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Ajouter</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}