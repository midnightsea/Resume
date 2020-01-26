import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';

import Footer from '../components/Footer';
import screen from '../assets/images/screen.png';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>{config.subHeading} <br/> {config.location}</p>
        <ul className="actions">
        Contact
        {config.socialLinks.map(social => {
          const { icon, url, name } = social;
          return (
            <li key={url}>
              <a className={`icon ${icon}`} href={url}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
        </ul>
      </div>
      <div className="image phone">
        <div className="inner">
          <img src={screen} alt="" />
        </div>
      </div>
    </header>

    <section id="two" className="wrapper">
      <div className="inner alt">
        <Experience/>
        <Education/>
        <Skills/>
      </div>
    </section>

    <section id="three" className="wrapper style2 special">
      <header className="major">
        <h2>Elements Page</h2>
        <p>This starter is included with Elements demo for the starter</p>
      </header>
      <ul className="actions special">
        <li>
          <Link to="/Elements" className="button primary icon fa-plus">
            Check Elements
          </Link>
        </li>
      </ul>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
