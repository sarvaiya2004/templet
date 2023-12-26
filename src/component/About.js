import React from 'react'
import './about.css'
import aboutus from './images/aboutus.png'
import icon from './images/icon.png'


const About = () => {
  return (
    <div>
      <h3 className='name'>
        ----------ABOUT US---------
      </h3>
      <div className='contein'>
        <div className='img1'>
        <img className='image' src={aboutus} />
        </div>
      <div >
        <p className='pg-about'> 
          We are a passionate group of firends driven<br />by a shared vusion to establish an exceptional IT <br />
          solution company.With unwavering focus and<br />dedication,We strive to turn our expertise to<br />
          deliver comprehensive solutions. Together,We<br />are cimmitted to making a positive difference<br />
          through our innovative approach and client-<br />centered approach. <br /><br />
          <div className='pg-2'>
          <img src={icon} />
          
          <p className='pg-3'>4+ years Exprrience </p>
          <div>
            
          </div>
          </div>
        </p>
      </div>
      </div>
    </div>
    
  );
};

export default About