import React, { useEffect, useRef} from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Paragraph } from '../components';
import whatisImage from '../images/whatis.jpg';
import '../styles/whatis.css';

const description = 'Lion dance, or "múa lân" in Vietnamese, is a traditional Chinese performance art that dates back more than a thousand years that is now also popular in many East and Southeast Asian countries. The dance is accompanied by the beat of a drum, cymbals, and gongs, which are believed to ward off evil spirits and bring good luck. Lion dance is often performed during Lunar New Year and other important occasions, such as weddings, business openings, and cultural festivals. The dance is not only a form of entertainment but also a cultural symbol of strength, courage, and prosperity.';

const Whatis = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='whatis'>
      <div className='whatis__image' ref={revealContainer}>
        <img alt='What is lion dance?' src={whatisImage} />
      </div>

      <Paragraph header='WHAT IS LION DANCE?' paragraph={description} />
    </section>
  )
};

export default Whatis;