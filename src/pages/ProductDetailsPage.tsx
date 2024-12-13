import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../components/products/ProductDetails';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { useProduct } from '../hooks/useProduct';

export function ProductDetailsPage() {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(Number(id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-lg mb-8" />
            <div className="h-8 bg-gray-200 w-1/3 rounded mb-4" />
            <div className="h-4 bg-gray-200 w-1/4 rounded mb-8" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Produit non trouvé
          </h2>
          <p className="text-gray-600">
            Désolé, le produit que vous recherchez n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetails product={product} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </main>
  );
}