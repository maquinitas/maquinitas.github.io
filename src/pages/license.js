import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - license</title>
    </Helmet>
    <Layout>
    <Header headerText="License" />
    </Layout>
    <p>MIT</p>
  </div>
);
