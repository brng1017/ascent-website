import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Paragraph } from '../components';
import specialsImage from '../images/special-event.jpg';
import '../styles/special-event.css';

const description = 'Lion dance is a traditional East/Southeast Asian art form that is entertaining and engaging for people of all ages. Whether it\'s a birthday party or corporate event, lion dance adds a cultural and festive element that will leave a lasting impression on your guests. By having us perform for your event, you\'ll not only entertain your guests, but also introduce them to an important aspect of Asian culture.';

const SpecialEvent = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='specials'>
      <Paragraph header='SPECIAL EVENTS' paragraph={description} link='/book' button='BOOK TODAY' />

      <div className='specials__image' ref={revealContainer}>
        <img alt='Special Events' src={specialsImage} />
      </div>
    </section>
  )
};

export default SpecialEvent;