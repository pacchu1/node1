import React from 'react'
import image from '../src/images/subbi.jpeg';
import image1 from '../src/images/gubbi.jpeg';
import  './styles/contact.css';
const Contact = () => {
  const handleSignIn = () => {
    alert('Successfully submitted');
  }
  return (
    <div className='back'>
      <h1 className='contact'>Contact us for more information</h1>
      <h2 className='contact1'>Welcome To React Js</h2>
    <marquee className='move'> Choose from over 210,000 online video courses with new additions published every month
....!!</marquee>
<p className='office'>Our Offices</p>
<div className='tum'>
  
<img className='che' src={image} alt='plant' />

<img  className='tu'  src={image1} alt='plant' />


</div>

<div className='para'>
<p className='san'>San Francisco, CA</p>
<p className='co'>Denver, CO</p>
</div>
<p className='msg'>Massage</p>
<div >
  <input className='query' type='text' placeholder='Enter your query here'/>
  <div>
  <button className='btn' onClick={handleSignIn} type='submit'>submit</button>
  </div> 
</div>
    </div>
  )
}

export default Contact
