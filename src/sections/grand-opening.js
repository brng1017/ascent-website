import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Paragraph } from '../components';
import openingImage from '../images/grand-opening.jpg';
import '../styles/grand-opening.css';

const description = 'In Chinese culture, lion dance is believed to ward off evil spirits and bring good luck and prosperity to new businesses. By including lion dance in your grand opening, you\'ll attract attention and create an exciting and memorable experience for your guests. Our performance will help create a positive image for your business and set the tone for a successful launch.';

const GrandOpening = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='opening'>
      <div className='opening__image' ref={revealContainer}>
        <img alt='Grand Openings' src={openingImage} />
      </div>

      <Paragraph header='GRAND OPENINGS' paragraph={description} link='/book' button='BOOK TODAY' />
    </section>
  )
};

export default GrandOpening;