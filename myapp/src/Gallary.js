import React from 'react'
import gallary from './styles/gallary.css';
import image1 from '../src/images/download.jpeg';
import image2 from '../src/images/download 1.jpeg';
import image3 from '../src/images/download 2.jpeg';
import image4 from '../src/images/download 3.jpeg';
import image5 from '../src/images/download 5.jpeg';
import image6 from '../src/images/download 6.webp';
import image7 from '../src/images/download 7.jpeg';
import image8 from '../src/images/download 8.jpeg';
const Gallary = () => {
  return (
    <div className='gal'>
      <h1>All photos</h1>
      <div className="image-row">
        <img src={image1} alt="sample 1"/>
        <img src={image2} alt="sample 1"/>
        <img src={image3}   alt="sample 1"/>
        <img src={image4} alt="sample 1"/>
       
      </div>
      <div className="image-row">
        <img src={image5} alt="sample 1"/>
        <img src={image6} alt="sample 1"/>
        <img src={image7} alt="sample 1"/>
        <img src={image8} alt="sample 1"/>
       
      </div>
    </div>
  )
}

export default Gallary
