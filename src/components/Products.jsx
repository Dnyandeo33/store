import { Navbar } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import { useLocation } from 'react-router-dom';

const categories = [
  'laptops',
  'beauty',
  'furniture',
  'home-decoration',
  'mens-shirts',
  'womens-dresses',
];

const Products = () => {
  useFetchData('products');
  const path = useLocation().pathname;
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Navbar fluid rounded className="flex justify-center items-center">
        <Navbar.Toggle />
        <Navbar.Collapse>
          {categories.map((category, index) => (
            <Navbar.Link
              className="capitalize"
              key={index}
              href={`/products/${category}`}
            >
              {category}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      {path === '/products' && (
        <div className=" container mx-auto">
          <div className="flex flex-wrap gap-5 justify-center items-center">
            {products &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
