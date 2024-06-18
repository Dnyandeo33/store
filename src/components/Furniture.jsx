import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const Furniture = () => {
  useFetchData('products/category/furniture');
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <ShareData
      title="Furniture"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default Furniture;
