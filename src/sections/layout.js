import * as React from "react";
import { useState, useEffect } from 'react';
// import { useStaticQuery, graphql } from "gatsby";

import { Header, Hero, Footer } from '../sections';
import { Mail } from '../components';
import "../styles/layout.css";

const isSSR = typeof window !== 'undefined';

const getWindowSize = () => {
  const {innerWidth, innerHeight} = isSSR ? window : null;
  return {innerWidth, innerHeight};
}

const Layout = ({ children, hero, slogan }) => {
  const [scroll, setScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [active, setActive] = useState(false);
  const [showMailForm, setShowMailForm] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  }
  const handleMouseOut = () => {
    setActive(false);
  }

  const toggleMailForm = () => {
    setShowMailForm(!showMailForm);
  }

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  useEffect(() => {
    if (isSSR) {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    }
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    if (isSSR) {
      window.addEventListener('resize', handleWindowResize);
    }
    
    return () => {
      if (isSSR) {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);
  
  return (
    <>
      <div className={`
      ${scroll > 20 ? 'body--scrolled' : ''} 
      ${scroll > windowSize.innerHeight ? 'body--scrolled-window' : ''}
      ${scroll > (windowSize.innerHeight * 0.4) ? 'body--scrolled-half' : ''}
      `}>
        <div className={active ? 'nav-hover' : ''}>
          <div onMouseOver={handleMouseOver}
            onFocus={handleMouseOver}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}>
            <Header toggleMailForm={toggleMailForm} />
          </div>

          <Hero hero={hero} slogan={slogan} />
        </div>
        
        <Mail toggleMailForm={toggleMailForm} showMailForm={showMailForm} />

        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
