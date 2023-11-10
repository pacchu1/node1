import React from 'react'
import  './styles/course.css';
const Course = () => {
  return (
    <div className='course'>
      <h1 className='contact'>Available Course</h1>
      <div className='text'>course content</div>
      <div class="box-container">
        
    <div class="box">Microsoft AZ-900: Azure Fundamentals</div>
    <div class="box">Microsoft AZ-104: Azure Administrator</div>
    <div class="box">AWS Certified Solutions Architect - Professional</div>
    <div class="box">Certified Kubernetes Administrator (CKA)</div>
  
</div>
<div class="box-container">
        
        <div class="box">CompTIA Network+</div>
        <div class="box">Kubernetes</div>
        <div class="box">Professional Scrum Master (PSM)</div>
        <div class="box">Microsoft PL-300: Power BI Data Analyst Associate</div>
      
    </div>
    <div class="box-container">
        
        <div class="box">Scrum</div>
        <div class="box">Certified Information Systems Security Professional (CISSP)</div>
        <div class="box">Microsoft AZ-104: Azure Administrator</div>
        <div class="box">AWS Certified Developer - Associate</div>
      
    </div>

    <div class="box-container">
        
        <div class="box">Information Security</div>
        <div class="box">CompTIA Security+</div>
        <div class="box">CompTIA A+</div>
        <div class="box">Cisco Certified Network Associate (CCNA)</div>
      
    </div>


    </div>
  )
}

export default Course
