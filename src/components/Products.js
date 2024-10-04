import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import products from '../data/products'; // Import the products collection
import '../styles/Products.css';

const Products = () => {
  // States for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [price, setPrice] = useState(1000);
  const [freeShipping, setFreeShipping] = useState(false);
  const [sortBy, setSortBy] = useState('a-z');

  // Function to filter and sort products
  const getFilteredProducts = () => {
    return products
      .filter(product => {
        return (
          (product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategory === 'all' || product.category === selectedCategory) &&
          (selectedCompany === 'all' || product.company === selectedCompany) &&
          product.price <= price &&
          (!freeShipping || product.freeShipping)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'a-z') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'z-a') {
          return b.name.localeCompare(a.name);
        } else if (sortBy === 'low') {
          return a.price - b.price;
        } else if (sortBy === 'high') {
          return b.price - a.price;
        }
        return 0;
      });
  };

  // Get filtered and sorted products
  const filteredProducts = getFilteredProducts();

  return (
    <div className="products-page">
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="searchProduct">Search Product</label>
          <input
            id="searchProduct"
            type="text"
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="selectCategory">Select Category</label>
          <select id="selectCategory" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="Furniture">Furniture</option>
            <option value="Home Decor">Home Decor</option>
            <option value="Kitchen & Dining">Kitchen & Dining</option>
            <option value="Bedding & Bath">Bedding & Bath</option>
            <option value="Lighting">Lighting</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="selectCompany">Select Company</label>
          <select id="selectCompany" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
            <option value="all">All</option>
            <option value="IKEA">IKEA</option>
            <option value="Wayfair">Wayfair</option>
            <option value="Crate & Barrel">Crate & Barrel</option>
            <option value="Williams Sonoma">Williams Sonoma</option>
            <option value="West Elm">West Elm</option>
            <option value="Bed Bath & Beyond">Bed Bath & Beyond</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Sony">Sony</option>
            <option value="Alphabet">Alphabet</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortBy">Sort By</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="price-filter">
          <label>Select Price: ${price.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="free-shipping-filter">
          <input
            type="checkbox"
            checked={freeShipping}
            onChange={(e) => setFreeShipping(e.target.checked)}
          />
          <label>Free Shipping</label>
        </div>

        <button onClick={() => setSearchTerm('')} className="search-button">Search</button>
        <button onClick={() => { 
          setSearchTerm('');
          setSelectedCategory('all'); 
          setSelectedCompany('all'); 
          setPrice(1000); 
          setFreeShipping(false); 
        }} className="reset-button">Reset</button>
      </div>
      <hr className="divider" />
      <div className="products-list">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
