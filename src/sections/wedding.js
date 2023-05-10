import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { StaticImage } from 'gatsby-plugin-image';

import { Paragraph } from '../components';
import '../styles/wedding.css';

const description = 'In our culture, lion dance is considered a symbol of good luck and is often performed at weddings to bring blessings to the newlyweds. By incorporating lion dance into your wedding, you\'ll not only add a unique and cultural element to your celebration, but also express your respect for traditional customs.';

const Wedding = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='wedding'>
      <div className='wedding__image' ref={revealContainer}>
        <StaticImage
          src='../images/wedding.jpg'
          alt="Weddings"
          placeholder="blurred"
          layout='fullWidth'
        />
      </div>

      <Paragraph header='WEDDINGS' paragraph={description} link='/book' button='BOOK TODAY' />
    </section>
  )
};

export default Wedding;