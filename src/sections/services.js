import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { srConfig } from '../config';
import sr from '../utils/sr';

import Services01 from '../images/services-01.jpg';
import Services02 from '../images/services-02.jpg';
import { Paragraph } from '../components';
import '../styles/services.css';

const section = 'Ascent offers professional lion dance performances for weddings, grand openings, new year celebrations, and other special events. Bring good luck and prosperity to your event with our traditional lion dance, tailored to fit your theme and make your event truly special.';

const Services = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div className='services'>
      <div className='services__images' ref={revealContainer}>
        <Link to='/services'>
          <img alt="Services" src={Services01} />
        </Link>
        <Link to='/services'>
          <img alt="Services" src={Services02} />
        </Link>
      </div>
      <Paragraph header='SERVICES' paragraph={section} link='/services' button='More info' />
    </div>
  )
};

export default Services;