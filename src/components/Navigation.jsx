'use client';
import { Navbar } from 'flowbite-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className=" container mx-auto">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-bold text-yellow-500 dark:text-white">
          STORE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/products" active={path === '/products'}>
          Product
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
