import React from 'react'
import './contact.css'
import contact from './images/conte.png';

const Contact = () => {
  return (
    <div >
        <h3 className='title' >________ contact________</h3>




        <div className='mine'>

          <div className='info'>
            <p className='pg' >
              <h3>COMPANY</h3>
              Our innovative IT soltion and service pave the way for transformative<br />
              development. Together, let's leverage technology to drive progress,empower<br />
              communities,and create a brighter future.<br />

              <img src={contact} />
            </p>

          </div>

        </div>
      </div>


   
  );
};

export default Contact