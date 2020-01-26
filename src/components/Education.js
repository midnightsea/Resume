import React from 'react';
import config from '../../config';
import pic2 from '../assets/images/pic02.jpg';
export default function Education() {
  return (
    <section className="spotlight">
    <div className="image">
      <img src={pic2} alt="" />
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
