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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis, consequuntur repellat corporis animi voluptates id aliquam perspiciatis. Assumenda, neque!
                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa exercitationem ratione accusamus accusantium veniam quo.</p>
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
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
           
        </div>
    </div>
  )
}

export default About