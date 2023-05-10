import React from 'react'

import { Layout, BookingForm } from '../sections';
import { Seo } from '../components';

const Book = () => {
  return (
    <Layout hero='hero-04' slogan='BOOKING'>
      <BookingForm />
    </Layout>
  )
};

export const Head = () => <Seo title="Book Us" />;

export default Book;