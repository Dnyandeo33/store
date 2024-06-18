import { Route, Routes } from 'react-router-dom';
import Beauty from './components/Beauty';
import Food from './components/Food';
import Furniture from './components/Furniture';
import Home from './components/Home';
import HomeDecoration from './components/HomeDecoration';
import Laptops from './components/Laptops';
import MensShirts from './components/MensShirts';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import ProductNavigation from './components/ProductNavigation';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import WomensDresses from './components/WomensDresses';
const App = () => {
  return (
    <>
      <Navigation />
      <ProductNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food" element={<Food />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="home-decoration" element={<HomeDecoration />} />
        <Route path="mens-shirts" element={<MensShirts />} />
        <Route path="products" element={<Products />} />
        <Route path="products/product/:id" element={<SingleProduct />} />
        <Route path="womens-dresses" element={<WomensDresses />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
