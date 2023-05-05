import React from 'react'

import { Layout, BookingForm } from '../sections';
import { Seo } from '../components';
import Hero from '../images/hero-03.jpg';

const Book = () => {
  return (
    <Layout hero={Hero} slogan='BOOKING'>
      <BookingForm />
    </Layout>
  )
};

export const Head = () => <Seo title="Book Us" />;

export default Book;