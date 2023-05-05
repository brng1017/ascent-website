import React from 'react';
import { Link } from 'gatsby';
import { FiMail } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';

import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <Link to='/book' className='footer__book'>BOOK US</Link>
      <div className='footer__container'>
        <p className='footer__copyright'>
          © 2023 ASCENT LION DANCE ASSOCIATION
        </p>
        <div className='footer__socials'>
          <p className='footer__socials-phone'>(720) 515-6099</p>
          <a className='footer__socials-mail' href='mailto:ascentmualan@gmail.com'>
            <FiMail size={20} />
          </a>
          <a className='footer__socials-instagram' href='https://www.instagram.com/ascent.ld/' target='_blank' rel='noopener noreferrer'>
            <FiInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;