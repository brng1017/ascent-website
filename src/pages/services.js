import React from 'react';

import { Layout, NewYear, Wedding, GrandOpening, SpecialEvent, Addons } from '../sections';
import { Seo } from '../components';
import Hero from '../images/hero-03.jpg';

const Services = () => {
  return (
    <Layout hero={Hero} slogan='SERVICES'>
      <div>
        <NewYear />
        <GrandOpening />
        <SpecialEvent />
        <Wedding />
        <Addons />
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="Services" />;

export default Services;