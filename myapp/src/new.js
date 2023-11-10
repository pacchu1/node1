import React, { useState } from "react"

const New = () => {
    const[input,setInput]=useState('');
    const handleInputChange = (e)=>{
        setInput(e.target.value);
     
    
    console.log(input);
    }
  return (
    <div>
        <input type="text" value={input}  onChange={handleInputChange}/>
      <p>you typed:{input}</p>
    </div>
  )
}

export default New
