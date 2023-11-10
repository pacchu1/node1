import React from 'react';
import './styles/sidebar.css'
function Navbar({ onProfileClick }) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
      <div className="profile-icon" onClick={onProfileClick}>
        <div className='ico' >
          
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
