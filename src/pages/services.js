import React from 'react';

import { Layout, NewYear, Wedding, GrandOpening, SpecialEvent, Addons } from '../sections';
import { Seo } from '../components';

const Services = () => {
  return (
    <Layout hero='hero-03' slogan='SERVICES'>
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