import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem', color: "#85FFBD" }}> Find us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Kleine Markt 1, 4381 EJ Vlissingen</p>
        <p className='p__cormorant' style={{color: "#85FFBD", margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>From Tuesday to Saturday, from 10:00am to 5:30pm.</p>
        <p className='p__opensans'>Closed on Sunday and Monday</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.johnsons__inside} style={{ width: '100%', borderBottom: '5px solid #85FFBD'}} alt='find us'/>
    </div>
  </div>
);

export default FindUs;
