// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Other components like Featured Products will go here */}
    </div>
  );
}

export default Home;
