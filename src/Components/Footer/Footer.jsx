import React from 'react';
import Contact from '../Contact/Contact';
import {AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer'>
      <Contact/>
      <a href='https://www.linkedin.com/in/e-cotton/'><AiOutlineLinkedin/></a>
      <a href='https://github.com/cotton-elodie'><AiOutlineGithub/></a>
      
    </div>
  )
}

export default Footer