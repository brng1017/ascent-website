import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';

import Logo from '../images/logo.png';
import '../styles/hero.css';

const Hero = ({ hero, slogan }) => {
  const data = useStaticQuery(graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    `);

  const image = data.allImageSharp.edges.find(edge => 
    getSrc(edge.node).indexOf(hero) !== -1
  );
  const imageData = getImage(image.node);
  
  return (
    <div className='hero'>
      <GatsbyImage
        image={imageData}
        alt=''
        className='hero__image'
        style={{ position: 'absolute' }}
      />
      <Link className='hero__logo-container' to='/'>
        <img className='hero__logo' alt="Ascent logo" src={Logo} />
      </Link>
      <div className='hero__rise'>
        <h3>{slogan}</h3>
      </div>
    </div>
  )
};

export default Hero;