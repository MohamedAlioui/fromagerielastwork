import React, { useState } from 'react';
import { Tag, Check, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface CouponCodeProps {
  onApply: (discount: number) => void;
  onRemove: () => void;
}

export function CouponCode({ onApply, onRemove }: CouponCodeProps) {
  const [code, setCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCoupon = async (couponCode: string) => {
    // Simulate API call to validate coupon
    // In production, this would call your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const validCoupons = {
      'WELCOME10': 10,
      'SUMMER20': 20,
      'SPECIAL30': 30
    };

    return validCoupons[couponCode as keyof typeof validCoupons] || null;
  };

  const handleApply = async () => {
    if (!code) {
      setError('Veuillez entrer un code promo');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const discount = await validateCoupon(code);
      
      if (discount) {
        onApply(discount);
        setIsApplied(true);
        setError('');
      } else {
        setError('Code promo invalide');
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = () => {
    setCode('');
    setIsApplied(false);
    setError('');
    onRemove();
  };

  if (isApplied) {
    return (
      <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <Check className="w-5 h-5 text-emerald-600" />
          <span className="text-emerald-700 font-medium">Code promo appliqué: {code}</span>
        </div>
        <button
          onClick={handleRemove}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Supprimer le code promo"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Tag className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Code promo"
            className={`
              w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent
              ${error ? 'border-red-300' : 'border-gray-300'}
            `}
          />
        </div>
        <Button
          onClick={handleApply}
          disabled={isLoading}
          className="whitespace-nowrap"
        >
          {isLoading ? 'Vérification...' : 'Appliquer'}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}