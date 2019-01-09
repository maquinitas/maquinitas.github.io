import React from "react"
import Link from "gatsby-link"

export default props => (
  <div>
    <h1>maquinitas</h1>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/">Home</Link>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/instruments/">Instruments</Link>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/flavors/">Flavors</Link>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/gallery/">Gallery</Link>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/license/">License</Link>
    <Link style={{ margin: `0 0.5rem 0 0` }} to="/contact/">Contact</Link>
    <h2>{props.headerText}</h2>
  </div>
)
