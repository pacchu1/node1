// Sidebar.js

import React, { useState } from 'react';
import './sidebar.css'; 
import { FaBars } from 'react-icons/fa';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Sidebar content goes here */}
      
      <button className='toggle-button' onClick={handleToggle}><FaBars/></button>
      
      {/* Add other sidebar content */}
    </div>
  );
};

export default Sidebar;
