'use client';
import { Navbar } from 'flowbite-react';
import { useLocation } from 'react-router-dom';

const ProductNavigation = () => {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className="flex justify-center items-center">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/food" active={path === '/food'}>
          Food
        </Navbar.Link>
        <Navbar.Link href="/laptops" active={path === '/laptops'}>
          Laptop
        </Navbar.Link>
        <Navbar.Link href="/beauty" active={path === '/beauty'}>
          Beauty
        </Navbar.Link>
        <Navbar.Link href="/furniture" active={path === '/furniture'}>
          Furniture
        </Navbar.Link>
        <Navbar.Link
          href="/home-decoration"
          active={path === '/home-decoration'}
        >
          Home Decoration
        </Navbar.Link>
        <Navbar.Link href="/mens-shirts" active={path === '/mens-shirts'}>
          Mens Shirts
        </Navbar.Link>
        <Navbar.Link href="/womens-dresses" active={path === '/womens-dresses'}>
          Womens Dresses
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductNavigation;
