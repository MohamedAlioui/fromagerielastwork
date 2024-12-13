import { useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import { Product } from '../types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      if (!mounted) return;
      
      try {
        setIsLoading(true);
        setError(null);

        // Validate product data
        const validatedProducts = initialProducts.map(product => {
          if (!product.price) {
            throw new Error(`Product ${product.id} is missing price`);
          }
          if (!product.category) {
            throw new Error(`Product ${product.id} is missing category`);
          }
          return product;
        });
        
        if (mounted) {
          setProducts(validatedProducts);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to load products'));
          console.error('Error loading products:', err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, isLoading, error };
}