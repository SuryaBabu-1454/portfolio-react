import React, { useRef } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {


  
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Surya Prakash,</span> MERN Stack Developer.</h1>
        <p>Aspiring MERN Stack developer from Chennai,India </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#resum'>My Resume</AnchorLink></div>
        </div>
    </div>
  )
}

export default Hero