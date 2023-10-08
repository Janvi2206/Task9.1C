import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import your CSS file


function SignUp() {
  // State variables to store user registration data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Event handler to update the first name state
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Event handler to update the last name state
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Event handler to update the email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler to update the password state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler to update the confirm password state
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform your registration logic
    // For demonstration purposes, we'll just log the values to the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Redirect to the login page after registration
    // You can use the Link component or programmatically navigate
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

export default SignUp;
