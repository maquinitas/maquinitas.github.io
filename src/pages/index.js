import React from "react"
import Link from "gatsby-link";
import Header from "../components/header"
import Layout from "../components/layout"

export default () =>
  <div>
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
      <li>maquinitas-chuck</li>
      <li>maquinitas-foxdot</li>
      <li>maquinitas-max</li>
      <li>maquinitas-m4l</li>
      <li>maquinitas-pd</li>
      <li>maquinitas-supercollider</li>
      <li>maquinitas-tidal</li>
    </ul>

    <p>maquinitas is a project by <a href="http://montoyamoraga.io/">Aarón Montoya-Moraga</a>.</p>

  </div>
