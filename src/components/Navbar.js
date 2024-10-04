// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import Link
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> KofiCart</div>

      <div className="burger-menu" onClick={toggleMenu}>
        <span className="burger-icon">☰</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Checkout
          </NavLink>
        </li>
      </ul>

      <div className="cart-icon">
        {/* Wrap the cart icon in a Link to redirect to the cart section */}
        <Link to="/cart">
          <span role="img" aria-label="cart">🛒</span>
          <span className="cart-count">{cartItems.length}</span> {/* Display the cart count */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
