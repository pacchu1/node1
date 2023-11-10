import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/navbar.css'; // Import the external CSS file

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Replace the following image link with the path to your actual logo */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fDXQn-3CFq2UmbCQYqjdAeQwLWFp9nOGoQ&usqp=CAU"
          alt="Your Logo"
          className="logo"
        />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="profile-container">
        <div className="dropdown">
           
            {/* You can use an icon or an image for the profile */}
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/profile-boy-icon.png" 
              alt="Profile"
              className="profile-icon" onClick={handleProfileClick}
            />
          
          {/* Conditionally render the profile content based on the state */}
          {showProfile && (
            <div className="profile-dropdown">
              {/* Add your profile content here */}
              <p>Profile Name</p>
              <p>Email: example@example.com</p>
              <p>Mbile :7259648071</p>
              <p className='sign'>Sign out</p>
              {/* Add more profile details as needed */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
