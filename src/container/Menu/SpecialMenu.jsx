import React from 'react';

import { SubHeading, MenuItem, MenuItemWraps } from '../../components';
import { images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    {/* <div className='app__specialmenu-overlay flex__center'>
      <img src={images.J_logo_gray} alt='J letter'></img>
    </div>  */}
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu That Fits Your Palatte"/>
        <h1 className='headtext__cormorant'>Fresh Bagels, Delious Bowls and Filling Wraps</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_bagels flex__center'>
          <p className='app__specialMenu-menu_heading'> Our Bagels </p>
          <div className='app__specialMenu_menu_items'>
            {data.bagels.map((bagels, index) => (
              <MenuItem 
              key={bagels.title + index} 
              title={bagels.title} 
              price={bagels.price} 
              tags={bagels.tags}
              />
            ))}
          </div>
        </div>

              {/* <div className='app__specialMenu-menu_img'>
                    <img src={images.J_logo_gray} width='40px' alt='johnsons watermark'/>
              </div> */}

          <div className='app__specialMenu-menu_wraps flex__center'>
          <p className='app__specialMenu-menu_heading'> Our Wraps </p>
          <div className='app__specialMenu_menu_items'>
            {data.wraps.map((wraps, index) => (
              <MenuItem
              key={wraps.title + index} 
              title={wraps.title} 
              price={wraps.price} 
              tags={wraps.tags} 
              />
            ))}
          </div>
        </div>


        <div className='app__specialMenu-menu_bowls flex__center'>
          <p className='app__specialMenu-menu_heading'> Our Bowls </p>
          <div className='app__specialMenu_menu_items'>
            {data.bowls.map((bowls, index) => (
              <MenuItem 
              key={bowls.title + index} 
              title={bowls.title} 
              price={bowls.price} 
              tags={bowls.tags} 

              />
            ))}
          </div>
        </div>
        
      </div>

      <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'> View more</button>
      </div>
  </div>
);

export default SpecialMenu;
