import React from 'react';

import './MenuItemWraps.css';

const MenuItemWraps = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{color: 'white'}}>{title}</p>
      </div>

      <div className='app__menuitem-dash'/>

      <div className='app__menuitem-price'>

        <p className='p__cormorant'>  M: {price.small}</p>
        <br/>
        {price.big === '' ? '' : <p className='p__cormorant'>|  B: {price.big}  </p>}
      </div>
    </div>

    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItemWraps;
