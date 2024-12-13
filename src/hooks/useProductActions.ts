import { useState } from 'react';

export function useProductActions() {
  const [showActions, setShowActions] = useState(false);

  return {
    showActions,
    toggleActions: () => setShowActions(prev => !prev)
  };
}