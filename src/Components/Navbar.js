import React from 'react'
import styles from '../styles/Navbar.css'
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Image className='taskino-image' src="/img/logo.png" width="77" height="77" />
      </div>


      {/* <!-- NAVIGATION MENU --> */}
      <input type='checkbox' id='check' />
      <label htmlFor='check' className='hamburger_icon'>
        <i className="fa fa-bars" ></i>
        <i className="fa fa-close" ></i>
      </label>



      {/* <!-- Menu --> */}
      <div className='right_nav_list'>
        <ul className='menu'>
          <li>
            <a href="/#" className='active_nav'>
              Overview
            </a>
          </li>
          <li>
            <a href="/#">
              Testimonials
            </a>
          </li>
          <li>
            <a href="/#">
              Pricing
            </a>
          </li>
        </ul>
        <div className='authButtons'>
          <button className='loginBtn'>Login</button>
          <button className='signupBtn'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
