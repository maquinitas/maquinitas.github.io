import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"


export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - gallery</title>
    </Helmet>
    <Layout>
      <Header headerText="Gallery" />
    </Layout>
    <p>Coming soon...</p>
  </div>
);
