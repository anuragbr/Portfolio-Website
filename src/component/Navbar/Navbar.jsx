import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
// import cv from '../../assets/cv/resume.pdf'
const Navbar = ({  headerRef,
    aboutRef,
    servicesRef,
    projectsRef,
    contactRef,
  }) => {
    const scrollToComponent = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
    const url='../../assets/cv/resume.pdf'
    const downloadFileAtUrl=(url)=>
    {
        const fileName=url.split('/').pop()
        const aTag=document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }
  return (
    <div className='navbar'>
        <div className="nav-content">
            <div className="logo">
                <h2>Portfolio</h2>
            </div>
            <div className="nav-item">
                <ul>
                    {/* <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/service'><li>Services</li></Link>
                    <Link to='/project'><li>Projects</li></Link>
                    <Link to='/contact'><li>Contact</li></Link> */}
                    <li onClick={() => scrollToComponent(headerRef)}>Home</li>
                    <li onClick={() => scrollToComponent(aboutRef)}>About</li>
                    <li onClick={() => scrollToComponent(servicesRef)}>Services</li>
                    <li onClick={() => scrollToComponent(projectsRef)}>Projects</li>
                    <li onClick={() => scrollToComponent(contactRef)}>Contact</li>
                </ul>
            </div>
            <div className="btn">
            <button > <a href="resume.pdf" download="resume.pdf">Download CV</a></button>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar