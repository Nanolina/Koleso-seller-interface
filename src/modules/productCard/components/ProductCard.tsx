import React from 'react';
import { Product } from '../types';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-detail">{product.name}</div>
      <div className="product-detail">{product.brand}</div>
    </div>
  );
};
