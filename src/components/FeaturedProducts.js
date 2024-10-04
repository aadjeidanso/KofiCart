// src/components/FeaturedProducts.js
import React from 'react';
import '../styles/FeaturedProducts.css';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Avant-Garde Lamp',
      price: '$179.99',
      image: image1, // Use imported image
    },
    {
      id: 2,
      name: 'Coffee Table',
      price: '$235.99',
      image: image2, // Use imported image
    },
    {
      id: 3,
      name: 'Artificial Plant',
      price: '$54.29',
      image: image3, // Use imported image
    },
     {
      id: 4,
      name: 'Kitchen Cart',
      price: '$79.79',
      image: image4, // Use imported image
    },

        {
      id: 5,
      name: 'Shower curtain',
      price: '$86.75',
      image: image5, // Use imported image
    },
    {
      id: 6,
      name: 'Apple iPhone',
      price: '$867.99',
      image: image6, // Use imported image
    },
    {
      id: 7,
      name: 'Chandelier',
      price: '$764.45',
      image: image7, // Use imported image
    },
     {
      id: 8,
      name: 'Bunk bed',
      price: '$999.99',
      image: image8, // Use imported image
    },

        {
      id: 9,
      name: 'Mirror',
      price: '$167.79',
      image: image9, // Use imported image
    },
    {
      id: 10,
      name: 'Melamine plates',
      price: '$40.99',
      image: image10, // Use imported image
    },
    {
      id: 11,
      name: 'Comforter Sets',
      price: '$125.00',
      image: image11, // Use imported image
    },
     {
      id: 12,
      name: 'SamSung QLED TV',
      price: '$973.25',
      image: image12, // Use imported image
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <hr className="divider" />
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
