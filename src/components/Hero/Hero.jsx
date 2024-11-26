import React, { useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Surya Prakash,</span> Aspiring MERN Stack Developer.
      </h1>
      <p>"Hi, I’m Surya, a passionate MERN Stack Developer. I specialize in building dynamic, scalable web apps using MongoDB, Express, React, and Node.js. Eager to learn and grow, I’m ready to take on new challenges and build innovative solutions."</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
         
           
            <a
              href="/Resume.pdf" // Path to your resume file
              target="_blank" // Open in a new tab for viewing
              rel="noopener noreferrer"
              download="Surya_Resume.pdf" // Optional: force download with a custom filename
            >
              My Resume{" "}
            </a>
    
        </div>
      </div>
    </div>
  );
};

export default Hero;
