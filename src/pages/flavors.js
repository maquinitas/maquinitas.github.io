import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"

export default () =>
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - flavors</title>
    </Helmet>
    <Layout>
      <Header headerText="Flavors" />
    </Layout>
    <h1></h1>
    <h2>maquinitas-chuck</h2>
    <p>Scripts written in <a href="http://chuck.cs.princeton.edu/">ChucK</a>.</p>
    <h2>maquinitas-foxdot</h2>
    <p>Add-on written in Python for use with <a href="http://foxdot.org/">FoxDot</a>.</p>
    <h2>maquinitas-m4l</h2>
    <p>Patches written <a href="https://www.ableton.com/en/live/max-for-live/">Max for Live</a>.</p>
    <h2>maquinitas-max</h2>
    <p>Patches written in <a href="https://cycling74.com/">Max</a>.</p>
    <h2>maquinitas-pd</h2>
    <p>Patches written in <a href="http://puredata.info/">Pure Data</a>.</p>
    <h2>maquinitas-supercollider</h2>
    <p>Scripts written in <a href="https://supercollider.github.io/">SuperCollider</a>.</p>
    <h2>maquinitas-tidal</h2>
    <p>Add-on written in <a href="https://www.haskell.org/">Haskell</a> for use with <a href="http://tidalcycles.github.io">TidalCycles</a>.</p>
  </div>
