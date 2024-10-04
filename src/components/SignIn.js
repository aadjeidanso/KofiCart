// src/components/SignIn.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import { toast } from 'react-toastify';
import '../styles/SignIn.css';

const SignIn = () => {
  const { loginAsGuest, loginAsUser } = useContext(CartContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      const username = email.split('@')[0]; // Extract username from email
      loginAsUser(username); // Pass the username to loginAsUser
      navigate('/');
    } else {
      toast.error('Please enter valid credentials.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="login-button">LOGIN</button>
          <button type="button" className="guest-button" onClick={handleGuestLogin}>GUEST USER</button>
        </form>
        <div className="register-link">
          <p>Not a member yet? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
