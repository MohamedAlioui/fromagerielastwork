import { useState } from 'react';
import { Product } from '../types/product';

export function useProductDetails(product: Product) {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      // Add to cart logic
    } finally {
      setIsLoading(false);
    }
  };

  return {
    quantity,
    setQuantity,
    weight,
    setWeight,
    isLoading,
    handleAddToCart
  };
}