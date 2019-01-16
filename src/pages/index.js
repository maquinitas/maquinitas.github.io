import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default () =>
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - home</title>
    </Helmet>
    <Layout>
    <Header headerText="Home" />
    </Layout>
    <p>maquinitas is a free libre open-source software library.</p>
    <p>maquinitas lets you creatively interact with different <Link to="/instruments/">MIDI instruments</Link>.</p>
    <p>maquinitas is designed and developed forfor people people interested in:</p>
    <ul>
      <li>MIDI programming</li>
      <li>creative programming</li>
      <li>computer music</li>
      <li>synthesizers</li>
      <li>samplers</li>
      <li>sequencers</li>
      <li>drum machines</li>
      <li>and stuff</li>
    </ul>

    <p>maquinitas is available in different <Link to="/flavors">flavors</Link>:</p>

    <ul>
      <li><a href="https://github.com/maquinitas/maquinitas-chuck">maquinitas-chuck</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-foxdot">maquinitas-foxdot</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-max">maquinitas-max</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-m4l">maquinitas-m4l</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-pd">maquinitas-pd</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-supercollider">maquinitas-supercollider</a></li>
      <li><a href="https://github.com/maquinitas/maquinitas-tidal">maquinitas-tidal</a></li>
    </ul>

    <p>maquinitas is a project by <a href="http://montoyamoraga.io/">Aarón Montoya-Moraga</a>.</p>

  </div>
