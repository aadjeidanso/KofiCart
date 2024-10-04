// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SignIn from './components/SignIn';
import Register from './components/Register'; // Import the Register component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><FeaturedProducts /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} /> {/* Add the Register route */}
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
