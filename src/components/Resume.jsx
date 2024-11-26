import React from 'react'
import './Resume/Resume.css'
import resume from '../assets/resume.png'

const Resume = () => {
  return (
    <div className='resume' id='resume'>

        <input type="image" src={resume} alt="" />
       
    </div>
  )
}

export default Resume