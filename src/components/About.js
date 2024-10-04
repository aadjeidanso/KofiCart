// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Make sure to create and style this CSS file.
import aboutImage from '../assets/about-image.jpg'; // Replace with your actual image path.

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About WebCart" />
        </div>
        <div className="about-content">
          <h2>About KofiCart</h2>
          <p>Welcome to KofiCart – your ultimate destination for quality furniture, home decor, kitchen & dining essentials, bedding & bath items, lighting, and electronics..</p><p>We bring you a wide range of products from renowned brands like IKEA, Wayfair, Williams Sonoma, Crate and Barrel, West Elm, Bed Bath & Beyond, Apple, Samsung, Sony, and Alphabet – all at affordable prices.</p><p> Our commitment to exceptional service ensures that you have a seamless shopping experience. At KofiCart, we believe in offering top-notch products and outstanding customer support, making your home shopping journey enjoyable and hassle-free.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
