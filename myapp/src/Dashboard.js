
import React, { useState } from 'react';
import './Dash.css'
import image from './images/man.png'
import image7 from './images/content.JPG'
import Footer from './Footer';
import Courses from './Courses';
const Dashboard = () => {
  const [showNav, setShowNav] = useState(true)
  const [showCancelIcon, setShowCancelIcon] = useState(false);

  const [isBoxOpen, setIsBoxOpen] = useState(false); // State to track if the box is open

  const openBox = () => {
    setIsBoxOpen(true);
    
  };

  const closeBox = () => {
    setIsBoxOpen(false);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
    setShowCancelIcon(!showNav); // Toggles the icon
  
    // If the sidebar is closed, show it
    if (!showNav) {
      setShowCancelIcon(false); // Reset the icon to the initial state
    }
  };
  return <div className={`body-area${showNav ? ' body-pd' : ''}`}>
    <header className={`header${showNav ? ' body-pd' : ''}`}>
      <div className="header_toggle">
        
      <button className="cancel" onClick={toggleNav}>
  
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" fill="currentColor" class="bi bi-menu-button-wide" viewBox="0 0 16 16">
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
  <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
</button>
<div className='flex'>
  <div className='home'><a href="/Courses">Pruduct</a></div>
  <div className='home'><a href="#">Catagary</a></div>
  <div className='home'><a href="#">AboutUs</a></div>
  <div className='home'><a href="#">ContactUs</a></div>
  
</div>

     

      <div className="header_img">
      <img
            src={image}
            alt="Clue Mediator"
            onClick={openBox} // Add click event to open the box
            style={{ cursor: 'pointer', }} // Make the image responsive and set cursor to pointer
          />
        </div>
        </div>
        {isBoxOpen && (
          <div
            className="custom-box"
            style={{
              width: '400px',
              height: '700px',
              border: '0.1px solid #000',
              position: 'absolute',
              top: 'calc(100% + 20px)',
              right: '140px',
              background: 'rgba(255, 255, 255, 0.7)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
            
            }}
          >
            {/* Content of the box */}
            <div className="user-icon1">
              <img
                src={image}
                alt="User Icon"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </div>
            <div className="name1">PARASHURAM B</div>
            <div className="email1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>  :  pacchu@gmail.com</div>
            <div className="other1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>  :  Full Stack Developer</div>
<div className='amma'>Sign in</div>
<div className='then'>Switch Account</div>
<div className='amma2'>Log In With Another Account</div>
            <button className='last' onClick={closeBox}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
          </div>
        )}
    </header>
    <div className={`l-navbar${showNav ? ' show' : ''}`}>
      <nav className="nav">
        <div>
          <a href="https://cluemediator.com" target="_blank" className="nav_logo">
            <i className='bi bi-alexa nav_logo-icon' /> <span className="nav_logo-name">DASH BOARD</span>
          </a>
          <div className="nav_list">
          <div className="dashboard">
          <div className="user-icon">
            <img src={image} alt="User Icon" />
       </div>
<div className="user-details">
<div className="name">PARASHURAM B</div>
          <div className="email"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg> : pacchu@gmail.com</div>
           <div className="other"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> : Full Stack Developer</div>

</div>    
    
</div> 
          </div>
        </div>
        <a href="https://cluemediator.com" target="_blank" className="nav_link">
          <i className='bi bi-box-arrow-left nav_icon' /><span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
   
    <div className='cont'>
    <marquee className='move'> An event that needs the right audience, a product to be sold on Instagram, channel partners who need incentives to achieve your targets, or a content strategy that needs immediate attention…we have you covered.
</marquee>
  </div>
  <div className='cont2'>
      <div className='cont1'>
      
      <h1 className='cont1'><i>"Artificial intelligence will dramatically increase the pace of software development and make continuous delivery routine. Processes and roles will need to evolve, especially testing. Artificial intelligence is changing software development in ways large and small.."</i></h1>
      </div>
      
      <div className='main'>
      <img className="back" src={image7} alt='plane'/>
      </div>
      
    </div>
    <div className='fine'>
    <div className='next'>
        <img className='oman' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpX9TiLX1fEg35l-vhv9t4j5JmTP510TS-yBVrEuu3g&s' alt='mm'/>
      </div>
      <p className='do'><i>"Artificial intelligence is changing software development <br />in ways large and small. While many companies race to roll out AI-enabled <br  />features, the potential for AI goes beyond the feature level. Rather, AI will<br  /> become the foundation for most—if not all—SaaS solutions. <br />Machine learning and AI models will allow SaaS technologies to continually <br />drive new efficiencies across a variety of business processes. <br />AI should be seen as the foundation for a new way of development.

<br />Software delivery will become a utility. The grunt work that exacted a <br />high tax for incremental value will just happen, and the backlog of <br />high-value additions and innovation will surge into production. Humans will<br /> not get replaced. Rather, you will see the greater potential of software developers <br />unleashed".</i></p>
</div>
    <Footer/>
  </div>
}

export default Dashboard
