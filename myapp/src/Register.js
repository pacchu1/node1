import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'other',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Check if required fields are not empty before registration
    if (
      formData.firstName.trim() === '' ||
      formData.lastName.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === ''
    ) {
      // Display a custom error message
      alert('Please fill in all required fields');
    } else {
      // Add logic to handle registration (e.g., sending data to a server, storing in state, etc.)
      // After successful registration, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <div className="register-container">
      <h2>Registration Page</h2>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          required
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={handleInputChange}
        />

        <select
          id="gender"
          name="gender"
          value={formData.gender}
          required
          placeholder="Select"
          onChange={handleInputChange}
        >
          <option value="other">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
