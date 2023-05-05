import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { srConfig } from '../config';
import sr from '../utils/sr';

import '../styles/paragraph.css';

const Paragraph = ({ header, paragraph, link, button }) => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig(100));
  }, []);

  return (
    <div className='paragraph' ref={revealContainer}>
      <h2>{header}</h2>
      <p>{paragraph}</p>
      {
        link && <Link to={link}>{button}</Link>
      }
    </div>
  )
};

export default Paragraph;