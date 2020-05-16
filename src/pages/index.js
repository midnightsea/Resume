import React from "react";

import Layout from "../components/Layout";
import Scroll from "../components/Scroll";

import config from "../../config";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import Footer from "../components/Footer";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <header id="header">
      <div className="content">
        <h1>
          <a href="/#">{config.heading}</a>
        </h1>
        <p>
          {config.subHeading} <br /> {config.location}
        </p>
        <ul className="actions">
          Contact
          {config.socialLinks.map((social) => {
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
    </header>

    <section id="two" className="wrapper">
      <div className="inner alt">
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
