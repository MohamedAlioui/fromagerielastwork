import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';

interface CouponFormData {
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minPurchase?: number;
  startDate: string;
  endDate: string;
  usageLimit?: number;
  isActive: boolean;
}

interface CouponFormProps {
  initialData?: Partial<CouponFormData>;
  onSubmit: (data: CouponFormData) => void;
  onCancel: () => void;
}

export function CouponForm({ initialData, onSubmit, onCancel }: CouponFormProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CouponFormData>({
    defaultValues: {
      code: '',
      type: 'percentage',
      value: 0,
      isActive: true,
      ...initialData
    }
  });

  const discountType = watch('type');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code promo
          </label>
          <input
            type="text"
            {...register('code', { required: 'Code requis' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {errors.code && (
            <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de réduction
          </label>
          <select
            {...register('type')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="percentage">Pourcentage</option>
            <option value="fixed">Montant fixe</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Valeur
          </label>
          <div className="relative">
            <input
              type="number"
              {...register('value', {
                required: 'Valeur requise',
                min: {
                  value: 0,
                  message: 'La valeur doit être positive'
                },
                max: {
                  value: discountType === 'percentage' ? 100 : 1000,
                  message: discountType === 'percentage' ? 'Maximum 100%' : 'Maximum 1000 TND'
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {discountType === 'percentage' ? '%' : 'TND'}
            </span>
          </div>
          {errors.value && (
            <p className="mt-1 text-sm text-red-600">{errors.value.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Montant minimum d'achat
          </label>
          <div className="relative">
            <input
              type="number"
              {...register('minPurchase')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              TND
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date de début
          </label>
          <input
            type="date"
            {...register('startDate', { required: 'Date de début requise' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date de fin
          </label>
          <input
            type="date"
            {...register('endDate', { required: 'Date de fin requise' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Limite d'utilisation
          </label>
          <input
            type="number"
            {...register('usageLimit')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('isActive')}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">
            Code promo actif
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button variant="secondary" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit">
          Enregistrer
        </Button>
      </div>
    </form>
  );
}
