
import React, { useState } from 'react';
import './styles/logincomponent.css'
function LoginComponent() {
  const [loginData, setLoginData] = useState({
    firstName: '',
    email: '',
  });

  const loginUser = () => {
    // Perform client-side validation

    // Retrieve registration data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.firstName === loginData.firstName && userData.email === loginData.email) {
      // Successful login; redirect to the home page or take other actions
    } else {
      // Login error handling (e.g., display an error message)
    }
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="First Name"
        value={loginData.firstName}
        onChange={(e) => setLoginData({ ...loginData, firstName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default LoginComponent;
