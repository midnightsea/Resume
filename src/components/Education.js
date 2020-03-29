import React from 'react';
import config from '../../config';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import resume_yaml from "../assets/data/resume.yml"


export default function Education() {

    // Trying out using graphql to get image
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
      
      {resume_yaml["education"].map((data, index) => {
        return <div key={`content_item_${index}`}>
        <b>{data["school"].name}</b> <br />
        {data["school"].date}  <br />
        {data["school"].degree} <br />
        <i>{data["school"].awards}</i><br /> <br />
        </div>
      })}
    </div>
  </section>
  );
}
