import React from 'react';
import { Truck, CreditCard, ClipboardCheck } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: 'delivery' | 'payment' | 'review' | 'success';
}

const steps = [
  { id: 'delivery', name: 'Livraison', icon: Truck },
  { id: 'payment', name: 'Paiement', icon: CreditCard },
  { id: 'review', name: 'Vérification', icon: ClipboardCheck }
] as const;

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const getStepStatus = (stepId: typeof steps[number]['id']) => {
    const stepOrder = ['delivery', 'payment', 'review', 'success'];
    const currentIndex = stepOrder.indexOf(currentStep);
    const stepIndex = stepOrder.indexOf(stepId);

    if (currentIndex > stepIndex || currentStep === 'success') return 'complete';
    if (currentIndex === stepIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const Icon = step.icon;

          return (
            <div key={step.id} className="flex-1">
              <div className="relative flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${status === 'complete' ? 'bg-emerald-600 text-white' :
                    status === 'current' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-gray-100 text-gray-400'}
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className={`
                  mt-2 text-sm font-medium
                  ${status === 'complete' ? 'text-emerald-600' :
                    status === 'current' ? 'text-gray-900' :
                    'text-gray-400'}
                `}>
                  {step.name}
                </p>
                {index < steps.length - 1 && (
                  <div className={`
                    absolute top-5 left-1/2 w-full h-0.5
                    ${status === 'complete' ? 'bg-emerald-600' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}