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
          <p className='p__opensans' style={{ width: '350px'}}> We are the hippiest place in town. No matter how hungry you are, at Johsons you will be greated by the most welcoming people and with the healthiest, most delicious food in Town.  </p>
          <button type='button' className='custom__button_special_aboutus'> Know More about Us</button>
        </div>
        
        <div className='app__aboutus-content_knife  flex__center'>
          <img src={images.coffee_mugs} alt="about_coffee_mugs"/>
        </div>

        <div className='app__aboutus-content_history' id='OH'>
          <h1 className='headtext__cormorant'> Our History </h1>
          <img src={images.J_icon_green_flip2} width='25px' alt='spoon' className="spoon__image" />
          <p className='p__opensans' style={{ width: '350px'}}> Already at its third season, Johnsons was born from the dream of Saskia and Rich Johnson of creating a place where creative minds ravenous for good vibes and colorful food would come to study, chill or just intermingle</p>
          <button type='button' className='custom__button_special_aboutus'> More about Our History </button>
        </div>

    </div>
  </div>
);

export default AboutUs;
