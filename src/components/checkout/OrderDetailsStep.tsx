import React from 'react';
import { Product } from '../../types/product';
import { Button } from '../ui/Button';
import { ProductQuantitySelector } from '../products/ProductQuantitySelector';
import { ProductWeightSelector } from '../products/ProductWeightSelector';

interface OrderDetailsStepProps {
  product: Product;
  quantity: number;
  weight: number;
  onQuantityChange: (quantity: number) => void;
  onWeightChange: (weight: number) => void;
  onBack: () => void;
  onNext: () => void;
}

export function OrderDetailsStep({
  product,
  quantity,
  weight,
  onQuantityChange,
  onWeightChange,
  onBack,
  onNext
}: OrderDetailsStepProps) {
  const calculateTotal = () => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    return (basePrice * quantity * weight).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-gray-600">{product.price}/kg</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Poids
        </label>
        <ProductWeightSelector
          selectedWeight={weight}
          onWeightChange={onWeightChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantité
        </label>
        <ProductQuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Total:</span>
          <span className="text-emerald-600">{calculateTotal()} TND</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary" className="flex-1" onClick={onBack}>
          Retour
        </Button>
        <Button className="flex-1" onClick={onNext}>
          Confirmer la commande
        </Button>
      </div>
    </div>
  );
}