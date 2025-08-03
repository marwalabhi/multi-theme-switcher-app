import { useEffect } from 'react';
import ProductList from '../../ProductList/ProductList';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../utils/slices/productSlice';
import Banner from '../../Banner/Banner';
import type { AppDispatch } from '../../../utils/store';

const MainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

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
