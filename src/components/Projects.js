import React from "react";
import config from "../../config";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import resume_yaml from "../assets/data/resume.yml";

export default function Projects() {
  // Trying out using graphql to get image
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pic03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="spotlight">
      <div className="image">
        {<Img fluid={data.placeholderImage.childImageSharp.fluid} />}
      </div>
      <div className="content">
        <h3>Projects</h3>

        {resume_yaml["projects"].map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <b>{data["work"].description}</b>
              <br />
              {data["work"].technologies} <br />
              {data["work"].link} <br />
              <br /> <br />
            </div>
          );
        })}
      </div>
    </section>
  );
}
