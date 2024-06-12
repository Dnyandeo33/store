import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const Products = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products');
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
