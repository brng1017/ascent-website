import * as React from "react";
import { useState, useEffect } from 'react';

import { Header, Hero, Footer } from '../sections';
import { Mail, SideNav } from '../components';
import "../styles/layout.css";

const isSSR = typeof window !== 'undefined';

const getWindowSize = () => {
  if (isSSR) {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  return 0;
}

const Layout = ({ children, hero, slogan }) => {
  const [scroll, setScroll] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [active, setActive] = useState(false);
  const [showMailForm, setShowMailForm] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  }
  const handleMouseOut = () => {
    setActive(false);
  }

  const toggleSideNav = () => {
    if (windowSize.innerWidth <= 600) {
      setShowSideNav(!showSideNav);
    }
  }

  const toggleMailForm = () => {
    setShowMailForm(!showMailForm);
  }

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

      <div className={`${scroll > 20 ? 'body--scrolled' : ''}`}>
        <SideNav showSideNav={showSideNav} toggleSideNav={toggleSideNav} />
        <div className={active ? 'nav-hover' : ''}>
          <div onMouseOver={handleMouseOver}
            onFocus={handleMouseOver}
            onMouseOut={handleMouseOut}
            onBlur={handleMouseOut}
          >
            <Header toggleMailForm={toggleMailForm} toggleSideNav={toggleSideNav} />
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
