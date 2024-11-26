import React from 'react'
import './Footer.css'
import foooter_logo from '../../assets/logo1.jpeg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className='footer-logo'>
                    <img src={foooter_logo}  alt="" />
                    <h2>SURYA</h2>
                </div>
                <p>Aspiring MERN Stack developer from Chennai,India</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                @2024 Surya Prakash, All rights reserved
            </p>

        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer