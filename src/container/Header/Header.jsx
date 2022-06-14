import React from 'react';

import { SubHeading } from "../../components";

// import { images } from '../../constants'; 

import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div>
  <div className="app__header app__wrapper_for_main section__padding id='home'">
    {/* <div className="app_wrapper_info">
        <SubHeading
          title="Chase the new flavor"/>
          <h1 className='app__header-h1'> The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <button className='custom__button'> Explore the Menu</button>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img"/>
    </div> */}
    <img src={images.finalLogo} alt="header img"/>
    <button className='custom__button_special'> Explore the Menu</button>
  </div>
    
    </div>
);

export default Header;
