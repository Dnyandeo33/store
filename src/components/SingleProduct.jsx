import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFetchDataById from '../hooks/useFetchDataById';

const SingleProduct = () => {
  const { id } = useParams();
  useFetchDataById(id);
  const product = useSelector((state) => state.products.product);

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-96 md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {Array.isArray(product.images) && (
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
            src={product.images[0]}
            alt={product.title}
          />
        )}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <div className="flex justify-between mt-12 items-center">
            <span className="text-xs capitalize text-gray-900 dark:text-white">
              {product.category}
            </span>
            <span className="rounded-lg px-5 py-2.5 text-center text-xs">
              {`Quantity: ${product.stock}`}
            </span>
          </div>
          <div className="flex justify-between items-center">
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
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
