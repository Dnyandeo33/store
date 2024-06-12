import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const Furniture = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/furniture');
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
