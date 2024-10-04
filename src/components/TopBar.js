// src/components/TopBar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import '../styles/TopBar.css';

const TopBar = () => {
  const { isGuest, isUser, userName, logout } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setTimeout(() => {
      toast.success('Logged out successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 100);
  };

  return (
    <div className="top-bar">
      <div className="copyright">© Emmanuel Adjei Danso 2024</div> 
      <div className="auth-links">
        {(isGuest || isUser) ? (
          <>
            <span className="demo-user-text">Hello, {userName}!</span>
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign in</Link>
            <Link to="/register">Create Account</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;
