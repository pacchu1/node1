import React, { useState } from 'react';
import "./styles/courses.css";
import image from "./images/Online.jpg";
import Data from "./courseData";
import Footer from './Footer';

function Courses() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [search, setSearch] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    console.log("Search value:", e.target.value);
  }
  
  const filteredData = Data.filter((item) => {
    const itemSearch = search.toLowerCase();
    // Convert item.id to a string for comparison
    const idSearch = item.id.toString();
  
    return (
      idSearch.includes(itemSearch) || // Use includes for substring matching
      item.desc.toLowerCase().includes(itemSearch) ||
      item.price.toString().includes(itemSearch) ||
      item.duration.toString().includes(itemSearch) ||
      item.date.toLowerCase().includes(itemSearch) ||
      item.heading.toLowerCase().includes(itemSearch) ||
      item.src.toLowerCase().includes(itemSearch)
    );
  });
  
  return (
    <div>
      <nav className="navbar">      
        <div className="navbar-heading">Mapping Concept</div>
        <div className="search-bar">
          <input
            type='text'
            value={search}
            onChange={handleInputChange}
            placeholder="Search courses"
            className="search-input"
          />
           <a   className="nanu" href="#">Home</a>
           <a   className="nanu" href="#">Catagary</a>
           <a   className="nanu" href="#">AboutUs</a>
           <a   className="nanu" href="#">ContactUs</a>
        </div>
      </nav>
      <div className="coursesContainer">
        {filteredData.map((item) => {
          return (
            <div className="courseCard" key={item.id}>
              <div className="courseImage">
                <img
                  className="ima"
                  src={item.src}
                  alt="course package"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="courseInfo">
              <div className="id">{item.id}</div>
                <div className="duration">{item.duration}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="courseDetails">
                <div className="heading">{item.heading}</div>
                <div className="desc">{item.desc}</div>
              </div>
              <div className="courseSellPoint">
                <div className="buy">
                  <button className="buyButton">Buy Now</button>
                </div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Courses;
