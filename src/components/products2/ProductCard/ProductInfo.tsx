import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../ui/Badge';
import { StarRating } from '../../ui/StarRating';
import { Product } from '../../../types/product';

interface ProductInfoProps extends Product {}

export function ProductInfo({ id, name, price, rating, inStock }: ProductInfoProps) {
  return (
    <div className="p-4">
      <Link to={`/products/${id}`}>
        <h3 className="text-lg font-semibold mb-2 hover:text-emerald-600 transition-colors">
          {name}
        </h3>
      </Link>
      <div className="flex items-center justify-between">
        <span className="text-emerald-700 font-bold">{price}</span>
        <StarRating rating={rating} />
      </div>
      {!inStock && (
        <div className="mt-2">
          <Badge variant="warning">Rupture de stock</Badge>
        </div>
      )}
    </div>
  );
}