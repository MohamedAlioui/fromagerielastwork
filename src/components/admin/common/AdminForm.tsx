import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';

interface Field {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: { label: string; value: string | number }[];
}

interface AdminFormProps {
  fields: Field[];
  onSubmit: (data: any) => void;
  defaultValues?: any;
  isLoading?: boolean;
}

export function AdminForm({
  fields,
  onSubmit,
  defaultValues,
  isLoading,
}: AdminFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              {...register(field.name, { required: field.required })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              {...register(field.name, { required: field.required })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          ) : (
            <input
              type={field.type}
              {...register(field.name, { required: field.required })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          )}
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">This field is required</p>
          )}
        </div>
      ))}

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
}