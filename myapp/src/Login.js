import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/register.css'

import { FaCoffee, FaLinkedin } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa';
const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Add logic to check email and password (e.g., checking against registered users)
    // If the credentials match, redirect to the home page; otherwise, stay on the login page
    const { email, password } = formData;
    // Add your authentication logic here

    if (email === 'parashuramkb@gmail.com' && password === 'password') {
      navigate('/home'); // Use navigate to redirect to the home page
    } else {
      // Handle login failure (e.g., show an error message)
      navigate('/');
      alert('Login failed');
     
    }
  };

  return (
    <div  className='register-container'>
      <h2>Login Page</h2>
      <input className='log' type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input className='log'  type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button  className='register-button' onClick={handleLogin}>Login</button>
      <p>OR</p>
      {/* <div className="social">
                <a className='icons' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a className='icons' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a className='icons' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div> */}
            <div className="social-icons">
          <div className='sush'>  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ width: '30px', height: '30px' }} />
            </a></div>
            <div className='sush'>   <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ width: '30px', height: '30px' }} />
            </a></div>
            <div className='sush'> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ width: '30px', height: '30px' }} />
            </a></div>
            <div className='sush'> <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle style={{ width: '30px', height: '30px' }} />
            </a></div>
          </div>
    </div>
  );
};

export default Login;
