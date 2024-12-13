import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { CreditCard, Package, Truck } from 'lucide-react';
import { Product } from '../../types/product';
import { OrderForm } from './OrderForm';
import { OrderSummary } from './OrderSummary';
import { OrderConfirmation } from './OrderConfirmation';
import { generateOrderNumber } from '../../utils/orderUtils';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  quantity: number;
  weight: number;
}

export function OrderModal({ isOpen, onClose, product, quantity, weight }: OrderModalProps) {
  const [step, setStep] = useState(1);
  const [orderNumber, setOrderNumber] = useState('');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const handleClientInfoChange = (field: string, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      setStep(3);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleClose = () => {
    setStep(1);
    setClientInfo({
      name: '',
      phone: '',
      address: '',
      email: ''
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Informations de livraison
              </h3>
              <p className="text-gray-600">
                Veuillez remplir vos coordonnées pour la livraison
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
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

            <OrderForm
              clientInfo={clientInfo}
              onChange={handleClientInfoChange}
            />

            <div className="flex justify-end space-x-3">
              <Button variant="secondary" onClick={handleClose}>
                Annuler
              </Button>
              <Button 
                onClick={() => setStep(2)}
                disabled={!clientInfo.name || !clientInfo.phone || !clientInfo.address}
              >
                Continuer
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Récapitulatif de la commande
              </h3>
              <p className="text-gray-600">
                Vérifiez les détails de votre commande
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Informations de livraison</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Nom:</span> {clientInfo.name}</p>
                  <p><span className="font-medium">Téléphone:</span> {clientInfo.phone}</p>
                  <p><span className="font-medium">Adresse:</span> {clientInfo.address}</p>
                  {clientInfo.email && (
                    <p><span className="font-medium">Email:</span> {clientInfo.email}</p>
                  )}
                </div>
              </div>

              <OrderSummary
                product={product}
                quantity={quantity}
                weight={weight}
              />

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
                  <span>Paiement à la livraison</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="secondary" onClick={() => setStep(1)}>
                Retour
              </Button>
              <Button onClick={handleSubmit}>
                Confirmer la commande
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <OrderConfirmation
            orderNumber={orderNumber}
            onClose={handleClose}
          />
        )}
      </div>
    </Modal>
  );
}