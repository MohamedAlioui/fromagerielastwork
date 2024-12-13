import React from 'react';
import { FormInput } from '../ui/FormInput';

interface OrderFormProps {
  clientInfo: {
    name: string;
    phone: string;
    address: string;
    email: string;
  };
  onChange: (field: string, value: string) => void;
}

export function OrderForm({ clientInfo, onChange }: OrderFormProps) {
  return (
    <div className="space-y-4">
      <FormInput
        label="Nom complet"
        type="text"
        value={clientInfo.name}
        onChange={(e) => onChange('name', e.target.value)}
        placeholder="Votre nom complet"
        required
      />

      <FormInput
        label="Email"
        type="email"
        value={clientInfo.email}
        onChange={(e) => onChange('email', e.target.value)}
        placeholder="votre@email.com"
        required
      />

      <FormInput
        label="Téléphone"
        type="tel"
        value={clientInfo.phone}
        onChange={(e) => onChange('phone', e.target.value)}
        placeholder="Votre numéro de téléphone"
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Adresse de livraison
        </label>
        <textarea
          value={clientInfo.address}
          onChange={(e) => onChange('address', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          rows={3}
          placeholder="Votre adresse complète"
          required
        />
      </div>
    </div>
  );
}