// src/context/CartContext.js
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isGuest, setIsGuest] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState(''); // State for storing the username

  const addToCart = (product, color, amount) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id && item.color === color);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.color === color
            ? { ...item, amount: item.amount + amount }
            : item
        );
      } else {
        return [...prevItems, { ...product, color, amount }];
      }
    });
  };

  const removeFromCart = (id, color) => {
    setCartItems((prevItems) => prevItems.filter(item => !(item.id === id && item.color === color)));
  };

  const updateCartItemAmount = (id, color, newAmount) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id && item.color === color
          ? { ...item, amount: newAmount }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const loginAsGuest = () => {
    setIsGuest(true);
    setIsUser(false);
    setUserName('Demo User');
    clearCart();
    toast.success('Welcome, Demo User!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const loginAsUser = (username) => {
    setIsUser(true);
    setIsGuest(false);
    setUserName(username);
    clearCart();
    toast.success(`Welcome, ${username}!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const logout = () => {
    setIsGuest(false);
    setIsUser(false);
    setUserName('');
    clearCart();
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateCartItemAmount, 
      clearCart, 
      isGuest, 
      isUser, 
      userName, // Pass the username to the context
      loginAsGuest, 
      loginAsUser, 
      logout 
    }}>
      {children}
    </CartContext.Provider>
  );
};
