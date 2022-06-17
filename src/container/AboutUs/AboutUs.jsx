import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={images.J_logo_gray} alt='J letter'></img>
    </div> */}
    <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'> About us </h1>
          <img src={images.J_icon_green_flip1} width='25px' alt='spoon' className="spoon__image" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button_special_aboutus'> Know More about Us</button>
        </div>
        
        <div className='app__aboutus-content_knife  flex__center'>
          <img src={images.coffee_mugs} alt="about_coffee_mugs"/>
        </div>

        <div className='app__aboutus-content_history' id='OH'>
          <h1 className='headtext__cormorant'> Our History </h1>
          <img src={images.J_icon_green_flip2} width='25px' alt='spoon' className="spoon__image" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button_special_aboutus'> More about Our History </button>
        </div>

    </div>
  </div>
);

export default AboutUs;
