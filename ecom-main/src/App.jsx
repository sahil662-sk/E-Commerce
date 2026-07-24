import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './pages/Cart';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:_id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes as needed */}
      </Routes>
      <footer className="text-gray-800 py-8 mt-12">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Service</h2>
            <ul>
              <li className="mb-2">
                <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/faq" className="hover:underline">FAQ</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/shipping" className="hover:underline">Shipping & Delivery</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/returns" className="hover:underline">Returns & Exchanges</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <ul>
              <li className="mb-2">
                <NavLink to="/about" className="hover:underline">Our Story</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/careers" className="hover:underline">Careers</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/press" className="hover:underline">Press</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
