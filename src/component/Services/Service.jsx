import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Service = () => {
  return (
    <div className='services'>
       
        <div className="service-content">
            <div className="service-title">
            <h3>My <span> services</span></h3> 
            </div>
    
            <div className="service1">
            
             <FontAwesomeIcon icon="fa-brands fa-youtube" />
                <h2 className='title'>Web Development</h2>
                <ul>
                    <li>
                    Website Design and Development
                    </li>
                    <li>Responsive Web Design (Mobile-friendly websites)</li>
                    <li>E-Commerce website development</li>
                    <li>Single Page Applications</li>
                    <li>Website Maintentance and Updates</li>
                </ul>
            </div>
            <div className="service2">
            <h2 className='title'>UI/UX designing</h2>
                <ul>
                    <li>User Interface (UI) Design</li>
                    <li>User Experience (UX) Design</li>
                    <li> Responsive and Adaptive Design</li>
                    <li>Design Systems and Style Guides</li>
                    <li>Wireframing and Prototyping</li>
                </ul>
            </div>
            <div className="service3">
            <h2 className='title'>App development</h2>
         <ul>
            <li>Native Android App Development</li>
            <li>App UI/UX Design</li>
            <li>App Maintenance and Updates</li>
            <li>API Integration and Development</li>
            <li>App Performance Optimization</li>
         </ul>
            </div>
        </div>
    </div>
  )
}

export default Service