import { Navbar } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Product from '../components/Product';
import useFetchData from '../hooks/useFetchData';

const categories = [
  'beauty',
  'furniture',
  'groceries',
  'home-decoration',
  'laptops',
  'mens-shirts',
  'mens-shoes',
  'sunglasses',
  'tops',
  'womens-bags',
  'womens-dresses',
  'womens-jewellery',
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
              className="capitalize "
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
        <div className="container mx-auto">
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
