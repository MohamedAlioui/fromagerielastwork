import React from 'react';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { ProductActions } from './ProductActions';
import { useProductModals } from '../../../hooks/useProductModals';
import { Product } from '../../../types/product';

interface ProductCardProps extends Product {}

export function ProductCard(props: ProductCardProps) {
  const { 
    isOrderModalOpen,
    isCartModalOpen,
    isCheckoutModalOpen,
    openOrderModal,
    openCartModal,
    openCheckoutModal,
    closeOrderModal,
    closeCartModal,
    closeCheckoutModal
  } = useProductModals();

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
        <ProductImage {...props} onActionClick={openOrderModal} />
        <ProductInfo {...props} />
        <ProductActions onCartClick={openCartModal} onOrderClick={openCheckoutModal} />
      </div>

      <ProductOrderModal
        product={props}
        isOpen={isOrderModalOpen}
        onClose={closeOrderModal}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        product={props}
        quantity={1}
        weight={0.5}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={closeCheckoutModal}
        product={props}
      />
    </>
  );
}