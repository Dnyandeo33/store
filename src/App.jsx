import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Beauty from './components/Beauty';
import Contact from './components/Contact';
import Food from './components/Food';
import Furniture from './components/Furniture';
import Home from './components/Home';
import HomeDecoration from './components/HomeDecoration';
import Laptops from './components/Laptops';
import MensShirts from './components/MensShirts';
import Navigation from './components/Navigation';
import ProductNavigation from './components/ProductNavigation';
import Products from './components/Products';
import WomensDresses from './components/WomensDresses';
const App = () => {
  return (
    <>
      <Navigation />
      <ProductNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food" element={<Food />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/home-decoration" element={<HomeDecoration />} />
        <Route path="/mens-shirts" element={<MensShirts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/womens-dresses" element={<WomensDresses />} />
      </Routes>
    </>
  );
};

export default App;
