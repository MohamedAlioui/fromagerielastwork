import React from 'react';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

interface OrderSuccessProps {
  orderNumber: string;
  deliveryInfo: {
    email: string;
  };
  onClose: () => void;
}

export function OrderSuccess({ orderNumber, deliveryInfo, onClose }: OrderSuccessProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          Commande confirmée !
        </h3>
        <p className="text-gray-600 mt-1">
          Votre commande a été enregistrée avec succès
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          Numéro de commande: <span className="font-medium">{orderNumber}</span>
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
          <Mail className="w-5 h-5 text-emerald-600" />
          <span>Un email de confirmation a été envoyé à {deliveryInfo.email}</span>
        </div>
        <div className="flex items-center justify-center space-x-3 text-sm text-gray-600">
          <Package className="w-5 h-5 text-emerald-600" />
          <span>Vous serez notifié du suivi de votre commande</span>
        </div>
      </div>

      <Button onClick={onClose} className="w-full">
        Continuer mes achats
      </Button>
    </div>
  );
}