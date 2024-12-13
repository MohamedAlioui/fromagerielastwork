import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { CheckoutSteps } from './CheckoutSteps';
import { ClientInfoStep } from './ClientInfoStep';
import { OrderDetailsStep } from './OrderDetailsStep';
import { OrderConfirmation } from '../orders/OrderConfirmation';
import { Product } from '../../types/product';
import { generateOrderNumber } from '../../utils/orderUtils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(0.5);
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderNumber, setOrderNumber] = useState('');

  const handleClientInfoChange = (field: keyof typeof clientInfo, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep === 2) {
      setOrderNumber(generateOrderNumber());
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(prev => prev - 1);
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
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6">
        <CheckoutSteps currentStep={currentStep} />
        
        {currentStep === 1 && (
          <ClientInfoStep
            clientInfo={clientInfo}
            onChange={handleClientInfoChange}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 2 && (
          <OrderDetailsStep
            product={product}
            quantity={quantity}
            weight={weight}
            onQuantityChange={setQuantity}
            onWeightChange={setWeight}
            onBack={handleBackStep}
            onNext={handleNextStep}
          />
        )}

        {currentStep === 3 && (
          <OrderConfirmation
            orderNumber={orderNumber}
            onClose={handleClose}
          />
        )}
      </div>
    </Modal>
  );
}