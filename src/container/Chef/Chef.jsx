import React from 'react';

import { SubHeading} from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.johnsons__glass} style={{ width: '70%'}} alt='Rich, the chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant' style={{color: 'white', fontSize: '3rem'}}>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <p className='p__opensans'> I think that we eat first with our eyes, that's why we put so much effort in delivering plates that are delicious and as full of colors. </p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p> Rich Johnson </p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
