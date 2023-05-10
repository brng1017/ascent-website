import React, { useEffect, useRef} from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { StaticImage } from 'gatsby-plugin-image';

import { Paragraph } from '../components';
import '../styles/foundation.css';

const description = 'Ascent Lion Dance is a Vietnamese Catholic lion dance team based in Denver, CO, founded on the foundation of tradition, culture, and community. Our team is based at Queen of Vietnamese Martyrs Church and is composed of passionate and dedicated individuals who have over 15 years of experience in lion dancing.\n\nWe recently became an official non-profit organization, which has allowed us to take our training and performances to a more professional level. However, our mission remains the same: to preserve and promote the art of lion dancing and to share it with our community.\n\nOur team values the cultural significance of lion dancing and seeks to pass on this tradition to future generations. Through our performances, we aim to showcase the beauty and excitement of lion dancing while also promoting unity, teamwork, and respect.\n\nWe are proud to be a part of the Denver community and look forward to sharing our love of lion dancing with you.';

const Foundation = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className='foundation'>
      <Paragraph header='OUR FOUNDATION' paragraph={description} />

      <div className='foundation__image' ref={revealContainer}>
        <StaticImage
          src='../images/foundation.jpg'
          alt="Our foundation"
          placeholder="blurred"
          layout='fullWidth'
        />
      </div>
    </section>
  )
};

export default Foundation;