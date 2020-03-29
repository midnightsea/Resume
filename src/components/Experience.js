import React from 'react';
import config from '../../config';
import resume_yaml from "../assets/data/resume.yml"
import image from "../assets/images/pic01.jpg"

export default function Experience() {

  return (
    <section className="spotlight">
      <div>
        <h2>Experience</h2>
        {resume_yaml["experience"].map((data, index) => {
          return <div key={`content_item_${index}`}>
          <b>{data["employer"].company}</b> <br />
          {data["employer"].title}  <br />
          {data["employer"].date} <br />
          <ul>
            {data["employer"].description.map((data, index) => {
              return <li key={`description_item_${index}`}>{data}</li>
            })}
          </ul>
          </div>
        })}
      </div>
  </section>
  );
}
