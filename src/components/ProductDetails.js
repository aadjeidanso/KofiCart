// src/components/ProductDetails.js
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
import products from '../data/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [selectedColor, setSelectedColor] = useState('');
  const [amount, setAmount] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToBag = () => {
    if (!selectedColor) {
      toast.error('Please select a color.');
      return;
    }

    addToCart(product, selectedColor, amount);
    toast.success('Item added to cart', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <h3>{product.company}</h3>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        
        {/* Color Selection */}
        <div className="product-colors">
          <h4>Colors</h4>
          {product.colors.map((color, index) => (
            <span 
              key={index} 
              style={{ backgroundColor: color }} 
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`} 
              onClick={() => handleColorClick(color)}
            ></span>
          ))}
        </div>
        
        {/* Amount Selection */}
        <div className="product-amount">
          <h4>Amount</h4>
          <div className="amount-select-container">
            <select value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="amount-select">
              {[...Array(10).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>{x + 1}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button className="add-to-bag" onClick={handleAddToBag}>ADD TO BAG</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
