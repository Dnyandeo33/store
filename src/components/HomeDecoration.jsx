import useFetch from '../hooks/useFetch';
import ShareData from './ShareData';

const HomeDecoration = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/home-decoration');
  return (
    <ShareData
      title="Home Decoration Product"
      loading={loading}
      error={error}
      products={products}
    />
  );
};

export default HomeDecoration;
