import React from 'react';
import config from '../../config';
import resume_yaml from "../assets/data/resume.yml"


export default function Skills() {
  return (
    <section className="special">
      <h2>
          Skills
       </h2>
      <ul className="icons labeled">
        
        {resume_yaml["skill_list"].map((data, index) => {
          return <li>
          <span className={data["skill"].icon}>
        <span className="label">{data["skill"].name}</span>
          </span>
        </li> })}
      </ul>
    </section>
  );
}
