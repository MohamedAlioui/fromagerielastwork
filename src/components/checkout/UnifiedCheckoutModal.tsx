import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { CheckoutSteps } from './CheckoutSteps';
import { ClientInfoStep } from './ClientInfoStep';
import { OrderDetailsStep } from './OrderDetailsStep';
import { OrderSummary } from './OrderSummary';
import { OrderConfirmation } from '../orders/OrderConfirmation';
import { Product } from '../../types/product';
import { generateOrderNumber } from '../../utils/orderUtils';

interface UnifiedCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

type ClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

export function UnifiedCheckoutModal({ isOpen, onClose, product }: UnifiedCheckoutModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderNumber, setOrderNumber] = useState('');

  const handleClientInfoSubmit = (info: ClientInfo) => {
    setClientInfo(info);
    setCurrentStep(2);
  };

  const handleOrderDetailsSubmit = (qty: number, wgt: number) => {
    setQuantity(qty);
    setWeight(wgt);
    setCurrentStep(3);
  };

  const handleConfirmOrder = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOrderNumber(generateOrderNumber());
      setCurrentStep(4);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setClientInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    });
    setQuantity(1);
    setWeight(0.5);
    setOrderNumber('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6">
        <CheckoutSteps currentStep={currentStep} />
        
        {currentStep === 1 && (
          <ClientInfoStep
            clientInfo={clientInfo}
            onSubmit={handleClientInfoSubmit}
          />
        )}

        {currentStep === 2 && (
          <OrderDetailsStep
            product={product}
            quantity={quantity}
            weight={weight}
            onBack={() => setCurrentStep(1)}
            onSubmit={handleOrderDetailsSubmit}
          />
        )}

        {currentStep === 3 && (
          <OrderSummary
            formData={clientInfo}
            product={product}
            quantity={quantity}
            weight={weight}
            onBack={() => setCurrentStep(2)}
            onConfirm={handleConfirmOrder}
          />
        )}

        {currentStep === 4 && (
          <div className="text-center">
            <OrderConfirmation
              orderNumber={orderNumber}
              onClose={handleClose}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}