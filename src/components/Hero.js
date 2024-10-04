// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Hero.css';
import heroImage from '../assets/hero-image.jpg'; // Replace with your actual image path

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleProductsClick = () => {
    navigate('/products'); // Navigate to the /products route
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We are transforming the way you shop online</h1>
        <p>Whether online or in-store, we ensure that you have a seamless shopping experience.</p>
        <button onClick={handleProductsClick} className="hero-btn">OUR PRODUCTS</button> {/* Attach the click handler */}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
