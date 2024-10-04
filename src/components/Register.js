// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if any field is empty
    if (!username || !email || !password) {
      toast.error('Please fill out all fields before registering.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // For demonstration, assume registration is successful
    toast.success('Registered Successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Redirect to the SignIn page after a short delay
    setTimeout(() => {
      navigate('/signin');
    }, 3000); // Delay to allow the toast notification to show
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <button type="submit" className="register-button">REGISTER</button>

          <p className="login-link">
            Already a member? <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
