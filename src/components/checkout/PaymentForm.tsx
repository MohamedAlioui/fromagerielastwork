import React from 'react';
import { CreditCard, Wallet, Banknote } from 'lucide-react';
import { Button } from '../ui/Button';

interface PaymentFormProps {
  selectedMethod: 'cash' | 'card' | 'edinar';
  onSubmit: (method: 'cash' | 'card' | 'edinar') => void;
  onBack: () => void;
}

const paymentMethods = [
  {
    id: 'cash',
    name: 'Paiement à la livraison',
    icon: Banknote,
    description: 'Payez en espèces à la réception de votre commande'
  },
  {
    id: 'card',
    name: 'Carte bancaire',
    icon: CreditCard,
    description: 'Paiement sécurisé par carte bancaire'
  },
  {
    id: 'edinar',
    name: 'E-Dinar',
    icon: Wallet,
    description: 'Payez avec votre compte E-Dinar'
  }
] as const;

export function PaymentForm({ selectedMethod, onSubmit, onBack }: PaymentFormProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          Mode de paiement
        </h3>
        <p className="text-gray-600 mt-1">
          Choisissez votre méthode de paiement préférée
        </p>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          return (
            <button
              key={method.id}
              onClick={() => onSubmit(method.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                selectedMethod === method.id
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  selectedMethod === method.id
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end space-x-3">
        <Button variant="secondary" onClick={onBack}>
          Retour
        </Button>
        <Button onClick={() => onSubmit(selectedMethod)}>
          Continuer
        </Button>
      </div>
    </div>
  );
}