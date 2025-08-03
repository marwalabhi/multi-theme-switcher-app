import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import type { RootState } from '../../utils/store';

const ProductList = () => {
  const products = useSelector((state) => state.products.items.products);
  const loading = useSelector((state: RootState) => state.products.loading);

  if (loading) return <div className="m-3 rounded-2xl bg-blue-200 p-1 text-center">Loading...</div>;
  if (!products?.length)
    return <div className="m-3 rounded-[8px] bg-rose-200 p-1 text-center">No products found.</div>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
