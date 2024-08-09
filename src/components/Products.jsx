import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Product from '../components/Product';
import useFetchData from '../hooks/useFetchData';
import Pagination from './Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Navbar fluid rounded className="flex items-center justify-center">
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
          <div className="flex flex-wrap items-center justify-center gap-5">
            {currentPosts &&
              currentPosts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
          <Pagination
            products={products.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default Products;
