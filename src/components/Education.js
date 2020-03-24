import React from 'react';
import config from '../../config';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Education() {

    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "pic02.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
 
  return (
    <section className="spotlight">
    <div className="image">
       {<Img fluid={data.placeholderImage.childImageSharp.fluid} /> }
    </div>
    <div className="content">
      <h3>Education</h3>
      <p>
        Morbi mattis ornare ornare. Duis quam turpis, gravida at leo
        elementum elit fusce accumsan dui libero, quis vehicula lectus
        ultricies eu. In convallis amet leo non sapien iaculis efficitur
        consequat lorem ipsum.
      </p>
    </div>
  </section>
  );
}
