import React,{useRef,useEffect} from 'react'
import {Fade} from 'react-awesome-reveal'
// import Typed from 'typed.js/lib/typed.js';
import Typed from 'typed.js'
import './Header.css'
import vector from '../../assets/images/vector.jpg'
import About from '../About/About'
import Service from '../Services/Service'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'

 const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const type=new Typed(headerRef.current,{
      strings:['Frontend developer','Web designer','React developer'],
      typeSpeed:70,
      backSpeed:70,
      backDelay:1000,
      loop:true,
  
    })
    return () => {
      type.destroy();
    };
  }, []);
 
  const bounceAnimation = {
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0)' },
    ],
    duration: 1000,
  };
  return (
    <Fade animation={bounceAnimation}>  
    <div className='header'>
        <div className="header-content">
         <h3>Hi, Myself</h3>
         <h1>Anurag Baruah</h1>
         <h3 className='job'>And I'm a <span ref={headerRef}></span></h3>
         
             <p>
               I collaborate with clients from diverse  industries, translating
                their unique visions into stunning,<br />  user-friendly digital solutions.My expertise lies in 
                harnessing the power of React to build dynamic <br/> and responsive web applications that seamlessly 
                blend aesthetics and functionality. With a strong <br/>foundation  in modern frontend technologies 
                and a deep understanding of design principles, I craft <br /> pixel-perfect interfaces that captivate  
                audiences and drive engagement.</p>
             <button>Hire me </button>
           
        </div>
        <div className="image">
        <img src={vector} alt="" srcset="" />
        </div>
     
        

        </div>
   
       
    </Fade>
  )
}
export default Header
