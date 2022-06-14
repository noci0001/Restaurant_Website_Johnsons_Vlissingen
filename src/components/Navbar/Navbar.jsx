import React from 'react';
  
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const   Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.logoJohnsons} alt='app logo' />
    </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#menu'>About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>

      </ul>
      <div className='app__navbar-login'> 
      <a href='/' className='p_opensans'>Order Online</a>
      <div />
      <a href='/' className='p_opensans'>Book a Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="/" className='plus' onClick={() => setToggleMenu(false)}>Order Online</a></li>
              <li><a href="/" className='plus' onClick={() => setToggleMenu(false)}>Book a Table</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;