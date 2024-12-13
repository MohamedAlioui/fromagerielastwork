import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { useProductActions } from '../../../hooks/useProductActions';
import { Product } from '../../../types/product';

interface ProductImageProps extends Product {
  onActionClick: () => void;
}

export function ProductImage({ id, name, image, isNew, onActionClick }: ProductImageProps) {
  const { showActions, toggleActions } = useProductActions();

  return (
    <Link to={`/products/${id}`} className="block relative h-48">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      {isNew && (
        <div className="absolute top-2 left-2">
          <Badge variant="success">Nouveau</Badge>
        </div>
      )}
      
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleActions();
        }}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
      >
        <ShoppingCart className="w-5 h-5 text-emerald-600" />
      </button>

      {showActions && (
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" onClick={(e) => e.preventDefault()}>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleActions();
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                toggleActions();
                onActionClick();
              }}
              className="w-48 flex items-center justify-center space-x-2"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Ajouter au panier</span>
            </Button>
          </div>
        </div>
      )}
    </Link>
  );
}