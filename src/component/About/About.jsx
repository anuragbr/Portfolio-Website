import React from 'react'
import './About.css'
import myimg from  '../../assets/images/pngegg.png'
const About = () => {
  return (
    <div className='about wave'>
        <div className="about-content">
           
            <div className="about-img">
            <img src={myimg} alt="" srcset="" />
            </div>
            
            <div className="about-text">
            <div className="about-title">
                About
            </div>
                <div className="text-description">
                    <div className="text-title">
                        <p>I am </p>
                        <h2>Anurag Baruah,</h2>
                    </div>
                    <div className="text-para">
                        <p>A bachelor in the field of Computer Science & Engineering. 
                            A frontend developer enthusiastic person with interest in the 
                            field of design development. Fluency in Html,Css,JavaScript,and  JavaScript 
                            libraries like ReactJs, Programming and a hacker's mindset makes me compatible  
                            for Computer Security, System Administration, Development etc. .</p>
                    </div>
                </div>
                <div className="text-data">
                    <div className="text-data-left">
                    <ul >
                        <li><span>&gt; </span> <b> &nbsp;Birthday:</b> &nbsp; 10 August,2001</li>
                        <li><span>&gt; </span> <b> &nbsp;Heighest Qualification:</b>&nbsp;  B.Tech</li>
                        <li><span>&gt; </span> <b>&nbsp;Phone:</b>&nbsp;   +916003096793</li>
                        <li><span>&gt; </span> <b>&nbsp;Location:</b>&nbsp;   Guwahati,Assam,India</li>
                   
                    </ul>
                    </div>
                    <div className="text-data-right">
                    <ul >
                        <li><span>&gt; </span> <b>&nbsp; Age:</b>&nbsp;  22</li>
                        <li><span>&gt; </span> <b>&nbsp;  Email:</b>&nbsp;  anuragbaruah999@gmail.com</li>
                        <li><span>&gt; </span> <b>&nbsp;  Freelance:</b>&nbsp;  Available</li>
                        <li><span>&gt; </span> <b>&nbsp;  Job:</b>&nbsp;  Open to work</li>
                       
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About