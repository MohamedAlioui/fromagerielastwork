import { useState } from 'react';

export function useProductModals() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  return {
    isOrderModalOpen,
    isCartModalOpen,
    isCheckoutModalOpen,
    openOrderModal: () => setIsOrderModalOpen(true),
    openCartModal: () => setIsCartModalOpen(true),
    openCheckoutModal: () => setIsCheckoutModalOpen(true),
    closeOrderModal: () => setIsOrderModalOpen(false),
    closeCartModal: () => setIsCartModalOpen(false),
    closeCheckoutModal: () => setIsCheckoutModalOpen(false)
  };
}