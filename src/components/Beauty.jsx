import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const Beauty = () => {
  useFetchData('products/category/beauty');
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <ShareData
      title="Beauty Products"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default Beauty;
