import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { Button } from '../../ui/Button';

interface ProductActionsProps {
  onCartClick: () => void;
  onOrderClick: () => void;
}

export function ProductActions({ onCartClick, onOrderClick }: ProductActionsProps) {
  return (
    <div className="p-4 flex gap-2">
      <Button
        variant="secondary"
        className="flex-1 flex items-center justify-center space-x-2"
        onClick={onCartClick}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Panier</span>
      </Button>
      <Button
        className="flex-1 flex items-center justify-center space-x-2"
        onClick={onOrderClick}
      >
        <CreditCard className="w-4 h-4" />
        <span>Commander</span>
      </Button>
    </div>
  );
}