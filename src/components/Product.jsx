import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.images[0]}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
      </a>
      <h4 className="font-normal capitalize text-gray-700 dark:text-gray-400">
        {product.category}
        <span className="ml-44">{product.availabilityStatus}</span>
      </h4>
      <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {product.price}$
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
