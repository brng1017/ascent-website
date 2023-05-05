import React from 'react';
import { Link } from "gatsby";

import Logo from '../images/logo.png';
import '../styles/hero.css';

const Hero = ({ hero, slogan }) => {
  return (
    <div className='hero' style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})`,
    }}>
      <Link className='hero__logo-container' to='/'>
        <img className='hero__logo' alt="Ascent logo" src={Logo} />
      </Link>
      <div className='hero__rise'>
        <h3>{slogan}</h3>
      </div>
    </div>
  )
};

export default Hero;