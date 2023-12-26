import React from 'react'
import './services.css'
import ic from './images/1.png'
import abc from './images/2.png';
import efg from './images/3.png';
import Service from './images/service.png';

const Services = () => {
  return (
    <div>
      <h3 className='name'>
      ________ SERVICES________
      </h3>
      <div className='ser'>

      
      <div className='icon'>
      <div className='img-1'>
          <img src={ic} />
          <p className='web'>Web development </p>
          </div>
          <div className='img-2'>
          <img src={abc} />
          <p className='mobile'>Mobile development </p>
          </div>
          <div className='img-3'>
          <img src={efg} />
          <p className='ui'>UI/UX Design</p>
          </div>
          </div>
          <div className='img-4'>
            <img className='iii' src={Service} />
          </div>
          </div>
    </div>
  )
}

export default Services