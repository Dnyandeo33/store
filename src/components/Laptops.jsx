import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const Laptops = () => {
  useFetchData('products/category/laptops');
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <ShareData
      title="Laptops"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default Laptops;
