import React from 'react';
import config from '../../config';
import pic3 from '../assets/images/pic03.jpg';

export default function Experience() {
  return (
    <section className="spotlight">
    {/* <div className="image">
      <img src={pic3} alt="" />
    </div> */}
    <div className="content">
      <h3>Experience</h3>
      <p>
        <b>State Farm</b> <br />
        Software Developer  <br />
        <i>04/2019 - Present</i> <br />
        mattis ornare ornare. Duis quam turpis, gravida at leo <br></br>
        el
    </p>
    <p>
        <b>Aetna</b> <br />
        Voice Engineer  <br />
        <i>06/2017 - 04/2019</i> <br />

    </p>
    <p>
        <b>Air National Guard</b> <br />
        Aircraft Maintenance (Crew Chief)  <br />
        <i>11/2012 - 11/2018</i> <br />

    </p>
    </div>
  </section>
  );
}
