import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Kleine Markt 1, 4381 EJ Vlissingen</p>
        <p className="p__opensans">+31(0)635314550</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.J_logo_white} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.instagram.com/johnsons_vlissingen/?hl=en'><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Tuesday-Saturday:</p>
        <p className="p__opensans">10:00 am - 5:30 pm</p>
        <p className="p__opensans">Sunday and Monday:</p>
        <p className="p__opensans">CLOSED</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Johnsons. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;