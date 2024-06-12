import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const MensShirts = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/mens-shirts');
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
