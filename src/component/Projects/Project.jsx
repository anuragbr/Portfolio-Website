import React from 'react'
import './Project.css'
import proj1 from '../../assets/images/project1.jpg'
import proj2 from '../../assets/images/project2.jpg'
const Project = () => {
  return (
    <div className='project'>
        <div className="project-content">
            <h1>Latest <span> Projects</span></h1>
            <div className="project-left">

                <div className="top">
                   <img src={proj1} alt="" srcset="" />
                   <div className="content">
                    <h4>Food Delivery Website</h4>
                    <a href="https://github.com/anuragbr/myfood">View Project</a>
                   </div>
                </div>
                <div className="bottom">
                    <img src={proj2} alt="" srcset="" />
                    <div className="content">
                    
                    <h4>News Application</h4>
                    <a href="https://github.com/anuragbr/News-Application">View Project</a>
                   </div>
                  
                </div>
               
            </div>
            <div className="project-middle">

                 <div className="top">
                 <img src={proj1} alt="" srcset="" />
               
                 <div className="content">
                    <h4>Weather application</h4>
                    <a href="https://github.com/anuragbr/Weather-App">View Project</a>
                   </div>
                 
                </div>
                <div className="bottom">
                <img src={proj1} alt=""  srcset="" />
                <div className="content">
              
                    <h4>Landing page</h4>
                    <a href="https://github.com/anuragbr/Landing-page">View Project</a>
                   </div>
               
                </div>
            </div>

            
       
        </div>
    </div>
  )
}

export default Project