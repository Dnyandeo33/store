import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Home from './components/Home';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="products" element={<Products />}>
          <Route index element={<Category />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/products/product/:id" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
