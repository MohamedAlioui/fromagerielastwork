import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Product } from '../../types/product';
import { ProductQuantitySelector } from './ProductQuantitySelector';
import { ProductWeightSelector } from './ProductWeightSelector';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { OrderForm } from '../orders/OrderForm';
import { OrderSummary } from '../orders/OrderSummary';
import { OrderConfirmation } from '../orders/OrderConfirmation';
import { generateOrderNumber } from '../../utils/orderUtils';
import { CouponCode } from '../checkout/CouponCode';
import { calculateDiscount, formatPrice, parsePrice } from '../../utils/priceUtils';

interface ProductOrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductOrderModal({ product, isOpen, onClose }: ProductOrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { addItem } = useCart();

  const calculateTotal = () => {
    const basePrice = parsePrice(product.price);
    const subtotal = basePrice * weight * quantity;
    const discount = calculateDiscount(subtotal, discountPercentage);
    return formatPrice(subtotal - discount);
  };

  const handleClientInfoChange = (field: string, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
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

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  const handleApplyCoupon = (percentage: number) => {
    setDiscountPercentage(percentage);
  };

  const handleRemoveCoupon = () => {
    setDiscountPercentage(0);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit} className="p-6">
          <h3 className="text-xl font-semibold text-center mb-6">
            Commander {product.name}
          </h3>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-medium text-lg">{product.name}</h4>
                <p className="text-gray-600">{product.price}/kg</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poids
                </label>
                <ProductWeightSelector
                  selectedWeight={weight}
                  onWeightChange={setWeight}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <ProductQuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>
            </div>

            <OrderForm
              clientInfo={clientInfo}
              onChange={handleClientInfoChange}
            />

            <CouponCode
              onApply={handleApplyCoupon}
              onRemove={handleRemoveCoupon}
            />

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>{calculateTotal()}</span>
              </div>
              {discountPercentage > 0 && (
                <p className="text-sm text-emerald-600 mt-1">
                  Réduction appliquée: {discountPercentage}%
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="secondary"
                className="flex-1 flex items-center justify-center space-x-2"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Ajouter au panier</span>
              </Button>
              <Button
                type="submit"
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Commander maintenant</span>
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        orderNumber={orderNumber}
      />
    </>
  );
}