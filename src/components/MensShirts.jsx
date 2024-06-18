import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const MensShirts = () => {
  useFetchData('products/category/mens-shirts');
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <ShareData
      title="Mens Product"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default MensShirts;
