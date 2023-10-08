import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import {Link} from 'react-router-dom';

function Login() {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler to update the email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to update the password state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform actions like sending the email and password to a server for authentication
    // For demonstration purposes, we'll just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div>
        <Link to="/Signup">
          <button className="sign-up-button">Sign Up</button>
        </Link>  
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Your Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <Link to="/Header">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
