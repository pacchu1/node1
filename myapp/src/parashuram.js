import React, { useState,useEffect } from 'react';
import  './styles/parshuram.css';
const Parashuram = () => {
  const[count,setCount]=useState(2);
  console.log("clicked count is:", count);
  useEffect(()=>{
    console.log('The count is:', count);
  return ()=>{
    console.log('Iam being cleaned up');
  };
},[count]);
  const increment=()=>{
    setCount(count*2)
  }
  const reset=()=>{
    setCount(onreset)
  }

  return (
    <div>
      <h1>clicked count {count}</h1>
      <div className='button'>
      <button className='btn'  onClick={increment}>Increment</button>
      <button   className='btn1' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Parashuram
