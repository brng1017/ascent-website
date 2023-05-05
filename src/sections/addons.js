import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Card } from '../components';
import additionalImage from '../images/additional.jpg';
import monkeyImage from '../images/monkey.jpg';
import storyImage from '../images/story.jpg'
import benchesImage from '../images/benches.jpg';
import confettiImage from '../images/confetti.jpg';
import '../styles/addons.css';

const addons = [
  { header: 'ADDITIONAL LIONS', source: additionalImage },
  { header: 'MONKEY KING', source: monkeyImage },
  { header: 'DRUNKEN LION', source: additionalImage },
  { header: 'STORY ROUTINE', source: storyImage },
  { header: 'BENCH ROUTINE', source: benchesImage },
  { header: 'CONFETTI', source: confettiImage },
]

const Addons = () => {
  const revealTitle = useRef(null);
  const revealAddons = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealAddons.current.forEach((ref, index) => sr.reveal(ref, srConfig(index * 100)));
  }, []);

  return (
    <section className='addons'>
      <h2 className='addons__header' ref={revealTitle}>
        ADD-ONS
      </h2>

      <div className='addons__container'>
        {
          addons.map((addon, index) => (
            <div key={index} ref={el => revealAddons.current[index] = el}>
              <Card key={index} header={addon.header} source={addon.source} />
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Addons;