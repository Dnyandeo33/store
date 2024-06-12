import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const Food = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/groceries');
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
