import React from 'react';
import config from '../../config';
export default function Skills() {
  return (
    <section className="special">
      <h2>
          Skills
       </h2>
      <ul className="icons labeled">
        <li>
          <span className="icon fa-camera-retro">
            <span className="label">Ipsum lorem accumsan</span>
          </span>
        </li>
        <li>
          <span className="icon fa-refresh">
            <span className="label">Sed vehicula elementum</span>
          </span>
        </li>
        <li>
          <span className="icon fa-cloud">
            <span className="label">Elit fusce consequat</span>
          </span>
        </li>
        <li>
          <span className="icon fa-code">
            <span className="label">Lorem nullam tempus</span>
          </span>
        </li>
        <li>
          <span className="icon fa-desktop">
            <span className="label">Adipiscing amet sapien</span>
          </span>
        </li>
      </ul>
    </section>
  );
}
