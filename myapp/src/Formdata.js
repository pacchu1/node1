import React, { useState } from 'react'
import './sign.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import {NavLink} from 'react-router-dom';
import { FaCoffee, FaLinkedin } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa';
import Footer from './Footer';
const Formdata = () => {
  const navigate = useNavigate();
    const data=useLocation().state.Submitteddata;
    const [loginData, setLoginData]= useState({
      email:"",
      password:"",
    })
   
    
   
    const handleSignIn = () => {
       alert('Successfully signed in');
   
      // Implement your sign-in logic here
    };
    const handleChange=(e)=>{
      const{name, value}=e.target;
      setLoginData({
        ...loginData,
        [name]: value,
      })
    }
    const handleSubmit = (e) => {e.preventDefault();
      // navigate('/Dashboard', {state:{ Submitteddata: loginData}});
      if(data.email===loginData.email && data.password===loginData.password){
        navigate('/Dashboard', {state:{ Submitteddata: loginData}});
      }
      else{
        navigate('/')
        alert('Incorrect Password');
      }
    }
  return (
    <div className='pac'>
      {/* <h1>registration Form</h1>
      <p1>{data.firstName}</p1>
      <p1>{data.LastName}</p1>
      <p1>{data.email}</p1>
      <p1>{data.dob}</p1>
      */}
      <div className="sig">
         <h1 className='sign1'>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          
        <input className='katte'
           type="email"
           placeholder="Email"
           name='email'
           value={loginData.email} onChange={handleChange}
          
         />
         <input className='katte1'
           type="password"
           placeholder="Password"
           name='password'
           value={loginData.password} onChange={handleChange}
          
         />
         {/* <div className='for'><a href="/Form"><u>Forget Password?</u></a></div> */}
         <NavLink className='for' to='/Form'><u>Forget Password?</u></NavLink>

         <button className='log' onClick={handleSubmit}>LOGIN</button>
         <div className='or'>OR</div>
         {/* <div className="social-icons">
     <div className='sush'> <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a></div>
      <div className='sush'>  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a></div>
      <div className='sush'> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a></div>
    </div>
     */}
     <div className="social-icons">
          <div className='sush'>  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ width: '50px', height: '50px' }} />
            </a></div>
            <div className='sush'>   <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ width: '50px', height: '50px' }} />
            </a></div>
            <div className='sush'> <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ width: '50px', height: '50px' }} />
            </a></div>
            <div className='sush'> <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle style={{ width: '50px', height: '50px' }} />
            </a></div>
          </div>
        </form>
       </div>
      <Footer/>
       
    </div>
  )
}

export default Formdata
