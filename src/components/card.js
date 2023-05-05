import React from 'react';
import { Link } from 'gatsby';

import '../styles/card.css';

const Card = ({ header, source }) => {
  return (
    <div className='card'>
      <h3 className='card__header'>{header}</h3>
      <Link to='/book' className='card__link'>
        <img className='card__image' src={source} alt='Add-on' />
      </Link>
    </div>
  )
};

export default Card;