import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './styles/sidebar.css'
import Footer from './Footer';
const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileDetails = {
    name: 'Parashuram',
    email: 'parashuramkb@email.com',
    mobile: '7259648071',
    DOB: '1/6/2000',
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };
  
  return (
    <div className='nanu'>
      <button onClick={toggleSidebar} className="toggle-sidebar-button">
        ---
        ---
      </button>
      <Navbar onProfileClick={toggleProfile} />
      <div className='om'>
      {isSidebarOpen && <Sidebar />}
      {isProfileOpen && (
        <div className="profile">
          <h2>Profile Details</h2>
          <p>Name: {profileDetails.name}</p>
          <p>Email: {profileDetails.email}</p>
          <p>Mobile: {profileDetails.mobile}</p>
          <p>DOB: {profileDetails.DOB}</p>
        </div>
      )}
      </div><div className='omm'>
      <div className='om1'>
      <p className='well'>WELCOME TO MY WOLRD</p>
      <div className='final1'>
      <div className='final'>
      <div className='text'>
      <p className='me'>Hi,i'm  
      <span className='parashu'>   parashuram</span></p>
      </div>
      <p className='me1'>a Developer.</p>
      <p  className='well' >I use animation as a third dimension by which to simplify the experience and <br />kuiding through each and every interaction.i'm not adding motion just to spruce<br /> things up,but doing it in ways that.
      Advancements in Artificial Intelligence and <br />Machine Learning

AI is upending the conventional software development process <br />by enabling more efficient processes that boost productivity and shorten time to <br />market. That is why the usage of AI is growing at a breakneck pace <br></br>throughout the IT sector.
</p>
      </div>
      <div className='photo'></div>
      </div>
      </div>
      </div>
    </div>
    
  );
};

export default Home;
