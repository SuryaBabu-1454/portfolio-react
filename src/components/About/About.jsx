import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Surya Prakash – an enthusiastic MERN Stack Developer from Chennai, India. I specialize in building dynamic, scalable web applications using modern web technologies.
                   </p>
                    <p>I hold a Master’s in Computer Applications and have completed a comprehensive MERN Stack Development course at Fita Academy, where I deepened my understanding of full-stack development. I’m passionate about creating seamless user experiences and efficient applications.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>MongoDB</p>
                        <hr style={{width:'50%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Express.Js</p>
                        <hr style={{width:'60%'}} />
                    </div>
                    <div className="about-skill">
                        <p>React.js</p>
                        <hr style={{width:'75%'}} />
                    </div>
                    <div className="about-skill">
                        <p>Node.Js</p>
                        <hr style={{width:'50%'}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0</h1>
                <span className='achievement-descriptions'>Though I’m new to the industry, I’ve gained solid hands-on experience through extensive project work and training in the MERN stack.</span>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <span  className='achievement-descriptions'>Built several full-stack web applications, including e-commerce sites, task managers, and portfolios using the MERN stack.
                </span>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1> None</h1>
                <span className='achievement-descriptions'>Currently seeking opportunities to work on real-world client projects and gain valuable industry experience.</span>
                <p>Happy Clients</p>
            </div>
           
        </div>
    </div>
  )
}

export default About