import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../ui/FormInput';
import { Button } from '../ui/Button';

interface DeliveryFormProps {
  initialData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  onSubmit: (data: DeliveryFormProps['initialData']) => void;
  onCancel: () => void;
}

export function DeliveryForm({ initialData, onSubmit, onCancel }: DeliveryFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Informations de livraison
        </h3>
        <p className="text-gray-600 mt-1">
          Remplissez vos coordonnées pour la livraison
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Prénom"
          {...register('firstName', { required: 'Ce champ est requis' })}
          error={errors.firstName?.message}
        />
        <FormInput
          label="Nom"
          {...register('lastName', { required: 'Ce champ est requis' })}
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        label="Email"
        type="email"
        {...register('email', {
          required: 'Ce champ est requis',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Adresse email invalide'
          }
        })}
        error={errors.email?.message}
      />

      <FormInput
        label="Téléphone"
        {...register('phone', { required: 'Ce champ est requis' })}
        error={errors.phone?.message}
      />

      <FormInput
        label="Adresse"
        {...register('address', { required: 'Ce champ est requis' })}
        error={errors.address?.message}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Ville"
          {...register('city', { required: 'Ce champ est requis' })}
          error={errors.city?.message}
        />
        <FormInput
          label="Code postal"
          {...register('postalCode', { required: 'Ce champ est requis' })}
          error={errors.postalCode?.message}
        />
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">
          Continuer
        </Button>
      </div>
    </form>
  );
}