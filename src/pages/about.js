import React from 'react';

import { Layout, Foundation, Whatis, Instagram } from '../sections';
import { Seo } from '../components';

const About = () => {
  return (
    <Layout hero='hero-02' slogan='ABOUT US'>
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