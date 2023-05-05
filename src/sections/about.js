import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { srConfig } from '../config';
import sr from '../utils/sr';

import AboutImage from '../images/about-01.jpg';
import { Paragraph } from '../components';
import '../styles/about.css';

const section = 'Ascent Lion Dance is a dynamic Vietnamese Catholic team based in Denver, dedicated to sharing the art and culture of lion dancing with communities across the region. With skilled performers and a commitment to honoring our faith traditions, we strive to embody the strength, courage, and grace of the lion in every performance. Join us in celebrating this treasured art form and the spirit of the lion!'

const About = () => {
  const revealImage = useRef(null);

  useEffect(() => {
    sr.reveal(revealImage.current, srConfig());
  }, []);

  return (
    <section className='about'>
      <Paragraph header='ABOUT US' paragraph={section} link='/about' button='Learn more' />

      <div className='about__image' ref={revealImage}>
        <Link to='/about'>
          <img alt="About Us" src={AboutImage} />
        </Link>
      </div>
    </section>
  )
}

export default About;