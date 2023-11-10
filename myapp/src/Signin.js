import React, { useState } from 'react';
import './styles/signin.css';
const Signin = () => {
       
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     
    
     const handleSignIn = () => {
        alert('Successfully signed in');
    
       // Implement your sign-in logic here
     };

     return (
        <div className='sign'>
            
       <div className="signin-container">
         <h2>Sign In</h2>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <button className="signin-con"  onClick={handleSignIn}>Sign In</button>
       </div>
       </div>
     );
   };

   export default Signin;