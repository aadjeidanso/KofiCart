// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast for notifications
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Handle the amount change for the cart items
  const handleAmountChange = (id, color, newAmount) => {
    updateCartItemAmount(id, color, parseInt(newAmount));
  };

  // Handle item removal with a toast notification
  const handleRemoveItem = (id, color) => {
    removeFromCart(id, color);
    toast.success('Item removed successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle the checkout button click
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your Cart Is Empty</h3>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.company}</p>
                  <p>Color: <span className="color-circle" style={{ backgroundColor: item.color }}></span></p>
                </div>
                <div className="cart-item-amount">
                  <label htmlFor={`amount-${index}`}>Amount</label>
                  <select 
                    id={`amount-${index}`}
                    value={item.amount} 
                    onChange={(e) => handleAmountChange(item.id, item.color, e.target.value)}>
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                  <button className="cart-item-remove" onClick={() => handleRemoveItem(item.id, item.color)}>remove</button>
                </div>
                <div className="cart-item-price">
                  <p>${(item.price * item.amount).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="cart-summary">
            <h4>Order Summary</h4>
            <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
            <p>Tax: <span>${tax.toFixed(2)}</span></p>
            <h3>Order Total: <span>${total.toFixed(2)}</span></h3>
            <button className="checkout-button" onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
