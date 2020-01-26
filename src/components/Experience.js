import React from 'react';
import config from '../../config';
import pic3 from '../assets/images/pic03.jpg';
export default function Experience() {
  return (
    <section className="spotlight">
    <div className="image">
      <img src={pic3} alt="" />
    </div>
    <div className="content">
      <h3>Ultrices nullam aliquam</h3>
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
