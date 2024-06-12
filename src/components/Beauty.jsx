import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const Beauty = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/beauty');
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
