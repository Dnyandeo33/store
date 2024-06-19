import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { getProductByCategory } from '../redux/productSlice';

const Category = () => {
  const dispatch = useDispatch();
  let { category } = useParams();

  useEffect(() => {
    dispatch(getProductByCategory(category));
  }, [category, dispatch]);

  const products = useSelector((state) => state.products.categories[category]);
  const { loading, error } = useSelector((state) => state.products);

  return (
    <div className="container mx-auto flex flex-col">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p>{error}</p>}
      <div className=" container mx-auto">
        <div className="gap-5 flex flex-wrap justify-center items-center">
          {products &&
            products.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
