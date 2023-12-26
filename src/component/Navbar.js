import React from 'react'
import './navbar.css'
import { Outlet, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
      
        <nav>
          <div className="logo">
            <h3>
            <Link className='logo1' href="#">COMPANY</Link>
            </h3>
          </div>
          <div className="menubar" >
            <Link to="/" className="bar" >Home</Link>
            <Link to="/About" className="bar"> about Us</Link>
            <Link to="Services" className="bar" >Services</Link>
            <Link to="/Technology" className="bar" >Technology</Link>
            <Link to="/Contact " className="bar" >Contact Us</Link>
          </div>
        </nav>
      <Outlet />
    </div>
  )
}

export default Navbar