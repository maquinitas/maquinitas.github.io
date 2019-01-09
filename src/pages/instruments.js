import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"


export default () =>
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>maquinitas - instruments</title>
    </Helmet>
    <Layout>
      <Header headerText="Instruments" />
    </Layout>
    <p>maquinitas is designed for being used with several MIDI instruments.</p>
    <p>maquinitas works with synthesizers, samplers, drum machines, sequencers, etc.</p>
    <p>Some of the instruments currently supported include:</p>
    <ul>
      <li><a href="http://www.bastl-instruments.com/instruments/microgranny/">BASTL microGranny 2</a>: sampler.</li>
      <li><a href="https://www.korg.com/us/products/dj/volca_fm/">KORG volca fm</a>: FM synthesizer.</li>
      <li><a href="https://www.moogmusic.com/products/taurus/minitaur">Moog Minitaur</a>: bass synthesizer.</li>
      <li><a href="https://www.roland.com/global/products/tr-09/">Roland TR-09</a>: drum machine.</li>
    </ul>

  </div>
