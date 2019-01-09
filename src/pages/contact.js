import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - contact</title>
    </Helmet>
    <Layout>
    <Header headerText="Contact" />
    </Layout>
      <p>maquinitas is a project by <a href="http://montoyamoraga.io/">Aarón Montoya-Moraga</a>.</p>
      <p>Comments, doubts, and suggestions should be addressed to montoyamoraga@gmail.com</p>
  </div>
);
