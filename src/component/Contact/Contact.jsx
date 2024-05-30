import React,{useRef,useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const[btnchange,setBtnchange]=useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_s59e2s8', 'template_gi042yp', form.current, {
            publicKey: 'CgIn-UCnAXEIPd1fz',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setBtnchange(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div className='contact'>
            <div className="contact-me">

                <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                <h1>Contact <span>me</span></h1>
                    <div className="input-data">

                        <div className="input-data-top">
                        <input type='text' placeholder='Full Name' name="from_name"></input>
                        <input type='text' placeholder='Email Address' name="user_email"></input>
                        </div>

                        <div className="input-data-bottom">
                        <input type='text' placeholder='Mobile Number' name="phone"></input>
                        <input type='text' placeholder='Email Subject' name="subject"></input>
                        </div>
                        

                    </div>
                    <div className="msg">
                        <textarea placeholder='Your Message' name="message"></textarea>
                    </div> 
                </form>
                    <button  type={btnchange?'reset':'submit'} value='Reset' className={btnchange?"msg-sent":"send-msg"} onClick={sendEmail}>{btnchange?"Message sent! Click to send new message":"Send message"}</button>
                </div>
            </div>
        </div>
    )
}

export default Contact