import React from 'react'
import './home.css'
import images from './images/hero-img.png'

const Home = () => {
  return  (

<div >
<div className='homepage' >
        
<div>
          <h3 className='hed'>Let's Build<br></br>
            Together And<br></br>
            Grow Ahead <br></br></h3>
            <br />
          <p  className="bg-[#ffffff] p-4" >
            Our innovative IT soltion and services pave the way for<br></br>
            transformative development, Together,let,s leverage<br></br>
            technology to drive progress,empower communities,and<br></br>
            create a brighter future.
          </p>
          <br />
          <a className='bouttn'  href=''> Get in touch</a>
        </div>
        <div className='home-1' >
          <img className='img-1' src={images} />
        </div>
        </div>

      </div>
      
)
  

};

export default Home