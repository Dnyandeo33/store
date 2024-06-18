import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const Products = () => {
  useFetchData('products');
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <ShareData
      title="All Product"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default Products;
