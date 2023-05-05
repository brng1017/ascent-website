import React from 'react';

import { Layout, Foundation, Whatis, Instagram } from '../sections';
import { Seo } from '../components';
import Hero from '../images/hero-02.jpg';

const About = () => {
  return (
    <Layout hero={Hero} slogan='ABOUT US'>
      <div>
        <Foundation />
        <Whatis />
        <Instagram />
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="About Us" />;

export default About;