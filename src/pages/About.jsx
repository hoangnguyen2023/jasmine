import React, { Component } from "react";
import BannerAbout from "../section/BannerAbout";
import AboutSection from "../section/AboutSection";
import Contact from "../section/Contact";
import Backtotop from "../section/Backtotop";


export default class About extends Component {
  render() {
    return <div>
      <div className="banner">
        <BannerAbout />
      </div>
      <div>
       <AboutSection />

      </div>
      <div>
        <Contact />
      </div>
      <Backtotop />

    </div>;
  }
}
