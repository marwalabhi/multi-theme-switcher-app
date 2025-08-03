import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import ProductList from '../../ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../utils/slices/productSlice';
import Banner from '../../Banner/Banner';

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <main className="">
      <div>
        <Banner />
      </div>
      <ProductList />
    </main>
  );
};

export default MainContainer;
