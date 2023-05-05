import * as React from "react";

import { Layout, About, Services } from "../sections";
import { Seo } from "../components";
import Hero from '../images/hero-01.jpg';
// import * as styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout hero={Hero} slogan='RISE ABOVE'>
    <div>
      <About />
      <Services />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
