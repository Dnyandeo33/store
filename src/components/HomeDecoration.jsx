import useFetch from '../hooks/useFetch';
import Header from './Header';
import Product from './Product';

const HomeDecoration = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://dummyjson.com/', 'products/category/home-decoration');
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <Header title="Home Decoration Product" />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className=" container mx-auto flex flex-wrap gap-2 mt-5 justify-center items-center">
          {Array.isArray(products) &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeDecoration;
