import React from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image';

export default ({ data }) => (
  <div>
      <h1>Gallery</h1>
      <p>coming soon...</p>
      <Img resolutions={data.file.childImageSharp.resolutions} />
      <Img sizes={data.file.childImageSharp.sizes} />

  </div>
);

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "duck.jpg" }) {
      childImageSharp {
        resolutions(width: 500, height: 500) {
          src
          srcSet
          width
          height
            }
        sizes (maxWidth: 1240) {
            ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
