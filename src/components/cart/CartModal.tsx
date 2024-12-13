import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { Product } from '../../types/product';
import { ProductQuantitySelector } from '../products/ProductQuantitySelector';
import { ProductWeightSelector } from '../products/ProductWeightSelector';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { CouponCode } from '../checkout/CouponCode';
import { calculateDiscount, formatPrice, parsePrice } from '../../utils/priceUtils';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
  weight: number;
  mode?: 'cart' | 'checkout';
  onQuantityChange?: (quantity: number) => void;
  onWeightChange?: (weight: number) => void;
  onProceedToCheckout?: () => void;
}

export function CartModal({ 
  isOpen, 
  onClose, 
  product, 
  quantity,
  weight,
  mode = 'cart',
  onQuantityChange,
  onWeightChange,
  onProceedToCheckout
}: CartModalProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const calculateTotal = () => {
    const basePrice = parsePrice(product.price);
    const subtotal = basePrice * weight * quantity;
    const discount = calculateDiscount(subtotal, discountPercentage);
    return formatPrice(subtotal - discount);
  };

  const handleContinueShopping = () => {
    onClose();
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      weight
    });
    onClose();
  };

  const handleCheckout = () => {
    if (mode === 'checkout' && onProceedToCheckout) {
      onProceedToCheckout();
    } else {
      navigate('/cart');
    }
    onClose();
  };

  const handleApplyCoupon = (percentage: number) => {
    setDiscountPercentage(percentage);
  };

  const handleRemoveCoupon = () => {
    setDiscountPercentage(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            {mode === 'cart' ? (
              <ShoppingBag className="w-6 h-6 text-emerald-600" />
            ) : (
              <CreditCard className="w-6 h-6 text-emerald-600" />
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-6">
          {mode === 'cart' ? 'Ajouter au panier' : 'Commander le produit'}
        </h3>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-gray-600">Prix: {product.price}</p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Poids
              </label>
              <ProductWeightSelector
                selectedWeight={weight}
                onWeightChange={onWeightChange || (() => {})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <ProductQuantitySelector
                quantity={quantity}
                onQuantityChange={onQuantityChange || (() => {})}
              />
            </div>

            <CouponCode
              onApply={handleApplyCoupon}
              onRemove={handleRemoveCoupon}
            />

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>{calculateTotal()} TND</span>
              </div>
              {discountPercentage > 0 && (
                <p className="text-sm text-emerald-600 mt-1">
                  Réduction appliquée: {discountPercentage}%
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center space-x-2"
            onClick={handleContinueShopping}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Continuer mes achats</span>
          </Button>
          <Button
            className="flex-1 flex items-center justify-center space-x-2"
            onClick={mode === 'cart' ? handleAddToCart : handleCheckout}
          >
            <span>{mode === 'cart' ? 'Ajouter au panier' : 'Commander'}</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Modal>
  );
}