import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {


    // using Web3 Forms
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5c653f2a-ad54-4443-9aeb-9fcc250c47e7");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          alert(data.message);
          setResult(data.message);
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, to feel free to send me a message about anything that you want me t work on, You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>suryababu1454@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91 9344447833</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Chennai</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='8' placeholder='Enter Your Message..'></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>

    </div>
  )
}

export default Contact