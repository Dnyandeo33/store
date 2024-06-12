import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const Laptops = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/laptops');
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
