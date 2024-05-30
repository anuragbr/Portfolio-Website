import React,{useRef} from 'react'
import './App.css'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Service from './component/Services/Service'
import Project from './component/Projects/Project'
import Contact from './component/Contact/Contact'
import {Route,Routes} from 'react-router-dom';
import GoToTop from './component/GoToTop'
const App = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className='app'>
     
       <Navbar
        headerRef={headerRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      {/* Home component */}
      <div ref={headerRef}>
        <Header />
      </div>

      {/* About component */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Services component */}
      <div ref={servicesRef}>
        <Service />
      </div>

      {/* Projects component */}
      <div ref={projectsRef}>
        <Project />
      </div>

      {/* Contact component */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <div>
         <GoToTop/>
      </div>
    </div>
  )
}

export default App