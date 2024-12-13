import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Product } from '../../types/product';
import { CheckoutSteps } from './CheckoutSteps';
import { DeliveryForm } from './DeliveryForm';
import { PaymentForm } from './PaymentForm';
import { OrderReview } from './OrderReview';
import { OrderSuccess } from './OrderSuccess';
import { generateOrderNumber } from '../../utils/orderUtils';

interface CheckoutProcessProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
  weight: number;
  mode: 'cart' | 'direct';
}

type CheckoutStep = 'delivery' | 'payment' | 'review' | 'success';

export function CheckoutProcess({
  isOpen,
  onClose,
  product,
  quantity,
  weight,
  mode
}: CheckoutProcessProps) {
  const [step, setStep] = useState<CheckoutStep>('delivery');
  const [orderNumber, setOrderNumber] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'edinar'>('cash');

  const handleDeliverySubmit = (data: typeof deliveryInfo) => {
    setDeliveryInfo(data);
    setStep('payment');
  };

  const handlePaymentSubmit = (method: typeof paymentMethod) => {
    setPaymentMethod(method);
    setStep('review');
  };

  const handleOrderSubmit = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      setStep('success');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleClose = () => {
    setStep('delivery');
    setDeliveryInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: ''
    });
    setPaymentMethod('cash');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6">
        <CheckoutSteps currentStep={step} />
        
        {step === 'delivery' && (
          <DeliveryForm
            initialData={deliveryInfo}
            onSubmit={handleDeliverySubmit}
            onCancel={handleClose}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            selectedMethod={paymentMethod}
            onSubmit={handlePaymentSubmit}
            onBack={() => setStep('delivery')}
          />
        )}

        {step === 'review' && (
          <OrderReview
            deliveryInfo={deliveryInfo}
            paymentMethod={paymentMethod}
            product={product}
            quantity={quantity}
            weight={weight}
            onSubmit={handleOrderSubmit}
            onBack={() => setStep('payment')}
          />
        )}

        {step === 'success' && (
          <OrderSuccess
            orderNumber={orderNumber}
            deliveryInfo={deliveryInfo}
            onClose={handleClose}
          />
        )}
      </div>
    </Modal>
  );
}