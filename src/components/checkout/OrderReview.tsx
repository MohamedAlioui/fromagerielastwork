import React, { useState } from 'react';
import { Package, Truck, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import { Product } from '../../types/product';
import { calculateOrderTotal } from '../../utils/orderUtils';
import { CouponCode } from './CouponCode';
import { calculateDiscount, formatPrice } from '../../utils/priceUtils';

interface OrderReviewProps {
  deliveryInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: 'cash' | 'card' | 'edinar';
  product: Product;
  quantity: number;
  weight: number;
  onSubmit: () => void;
  onBack: () => void;
}

const paymentMethodLabels = {
  cash: 'Paiement à la livraison',
  card: 'Carte bancaire',
  edinar: 'E-Dinar'
};

export function OrderReview({
  deliveryInfo,
  paymentMethod,
  product,
  quantity,
  weight,
  onSubmit,
  onBack
}: OrderReviewProps) {
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const { subtotal, shipping, total } = calculateOrderTotal(product.price, quantity, weight);
  
  const discount = calculateDiscount(subtotal, discountPercentage);
  const finalTotal = total - discount;

  const handleApplyCoupon = (percentage: number) => {
    setDiscountPercentage(percentage);
  };

  const handleRemoveCoupon = () => {
    setDiscountPercentage(0);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Récapitulatif de la commande
        </h3>
        <p className="text-gray-600 mt-1">
          Vérifiez les détails de votre commande
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">
                Quantité: {quantity} × {weight}kg
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Informations de livraison</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <p>{deliveryInfo.firstName} {deliveryInfo.lastName}</p>
            <p>{deliveryInfo.address}</p>
            <p>{deliveryInfo.city}, {deliveryInfo.postalCode}</p>
            <p>{deliveryInfo.phone}</p>
            <p>{deliveryInfo.email}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Mode de paiement</h4>
          <p className="text-sm text-gray-600">
            {paymentMethodLabels[paymentMethod]}
          </p>
        </div>

        <CouponCode
          onApply={handleApplyCoupon}
          onRemove={handleRemoveCoupon}
        />

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sous-total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Frais de livraison</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            {discountPercentage > 0 && (
              <div className="flex justify-between text-sm text-emerald-600">
                <span>Réduction ({discountPercentage}%)</span>
                <span>-{formatPrice(discount)}</span>
              </div>
            )}
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-emerald-600">{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Package className="w-5 h-5 text-emerald-600" />
            <span>Produit soigneusement emballé</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Truck className="w-5 h-5 text-emerald-600" />
            <span>Livraison sous 24-48h</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            <span>Paiement sécurisé</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button variant="secondary" onClick={onBack}>
          Retour
        </Button>
        <Button onClick={onSubmit}>
          Confirmer la commande
        </Button>
      </div>
    </div>
  );
}