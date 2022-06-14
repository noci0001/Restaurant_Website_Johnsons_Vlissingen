import React from 'react';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { SubHeading } from "../../components";

// import { images } from '../../constants'; 

import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div>
  <div className="app__header app__wrapper_for_main section__padding id='home'">
    <img src={images.finalLogo} alt="Johnsons Logo"/>
    <button className='custom__button_special'><MdOutlineRestaurantMenu color="#000000" /> Explore the Menu </button>
  </div>
    
    </div>
);

export default Header;
