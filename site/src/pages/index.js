
import React from "react";
import Link from "gatsby-link";

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>maquinitas</h1>
   <p>Software library</p>
   <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/examples/">Examples</Link>
      <Link to="/contact/">Contact</Link>
    </div>
 </div>
