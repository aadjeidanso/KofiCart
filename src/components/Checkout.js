// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  
  // Local state to store form values
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');

  // Calculate the order summary
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
  const shipping = 5.00; // Example shipping cost
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  // Handle the order placement
  const handlePlaceOrder = () => {
    // Check if the required fields are filled
    if (!firstName || !address) {
      // Show a warning notification if fields are empty
      toast.error('Please fill out all fields before placing the order.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    
    // Show success notification if fields are filled
    toast.success('Order placed successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Clear cart after notification
    setTimeout(() => {
      clearCart(); // Clear cart using context function
    }, 3000); // Delay to allow the notification to show before clearing
  };

  // If the cart is empty, show the message
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2 className="empty-checkout">Nothing to check out</h2>
        <hr></hr>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Place Your Order</h2>
      
      <div className="checkout-content">
        {/* Shipping Information */}
        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <label>First Name</label>
          <input 
            type="text" 
            placeholder="Enter your first name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Update first name
          />
          <label>Address</label>
          <input 
            type="text" 
            placeholder="Enter your address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)} // Update address
          />
          <button className="checkout-button" onClick={handlePlaceOrder}>PLACE YOUR ORDER</button>
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h4>Order Summary</h4>
          <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
          <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
          <p>Tax: <span>${tax.toFixed(2)}</span></p>
          <h3>Order Total: <span>${total.toFixed(2)}</span></h3>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Checkout;
