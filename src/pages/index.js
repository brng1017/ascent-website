import * as React from "react";

import { Layout, About, Services } from "../sections";
import { Seo } from "../components";
// import * as styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout hero='hero-01' slogan='RISE ABOVE'>
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
