import { useSelector } from 'react-redux';
import useFetchData from '../hooks/useFetchData';
import ShareData from './ShareData';

const HomeDecoration = () => {
  useFetchData('products/category/furniture');
  const { products, loading, error } = useSelector((state) => state.products);
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
