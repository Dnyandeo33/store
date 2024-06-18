import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const Food = () => {
  useFetchData('products/category/groceries');
  const { products, loading, error } = useSelector((state) => state.products);

  return (
    <ShareData
      title="Groceries"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default Food;
