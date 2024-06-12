import PropTypes from 'prop-types';
import Header from './Header';
import Product from './Product';

const ShareData = ({ title, loading, error, products }) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={title} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className=" container mx-auto flex flex-wrap gap-2 mt-5 justify-center items-center">
        {Array.isArray(products) &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

ShareData.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  products: PropTypes.array.isRequired,
};

export default ShareData;
