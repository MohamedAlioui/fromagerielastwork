import React from 'react';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';

interface ClientInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface ClientInfoStepProps {
  clientInfo: ClientInfo;
  onChange: (field: keyof ClientInfo, value: string) => void;
  onNext: () => void;
}

export function ClientInfoStep({ clientInfo, onChange, onNext }: ClientInfoStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Prénom"
          value={clientInfo.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          required
        />
        <FormInput
          label="Nom"
          value={clientInfo.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          required
        />
      </div>

      <FormInput
        label="Email"
        type="email"
        value={clientInfo.email}
        onChange={(e) => onChange('email', e.target.value)}
        required
      />

      <FormInput
        label="Téléphone"
        type="tel"
        value={clientInfo.phone}
        onChange={(e) => onChange('phone', e.target.value)}
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
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Continuer
      </Button>
    </form>
  );
}