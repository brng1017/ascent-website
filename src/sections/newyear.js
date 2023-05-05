import React, { useEffect, useRef} from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Paragraph } from '../components';
import newYearImage from '../images/newyear.jpg';
import '../styles/newyear.css';

const description = 'Lion dance is an integral part of Lunar New Year celebrations and is believed to bring good luck and prosperity to those who witness it. Lunar New Years is the most celebrated and important holiday for many Asian communities around the world. Our performances are not only entertaining, but also carry cultural significance, as we aim to promote and preserve this important tradition. With our colorful costumes and dynamic movements, we\'ll create a festive and vibrant atmosphere that will engage and delight your guests.';

const NewYear = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='newyear'>
      <Paragraph header='LUNAR NEW YEARS CELEBRATION' paragraph={description} link='/book' button='BOOK TODAY' />

      <div className='newyear__image' ref={revealContainer}>
        <img alt='Lunar new years celebration' src={newYearImage} />
      </div>
    </section>
  )
};

export default NewYear;