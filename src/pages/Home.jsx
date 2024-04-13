import React, { Component } from "react";
import "../css/home.css";
import Banner from "../section/Banner";
import Service from "../section/Service";
import Wow from "../section/Wow";
import Address from "../section/Address";
import Backtotop from "../section/Backtotop";
import Count from "../section/Count";
import News from "../section/News";
import AboutSection from "../section/AboutSection";




export default class Home extends Component {
  render() {
    return (

      <div >
        <div className="carousel__main">
          <div className="carousel__banner">
            <Banner />
            <div className="carousel__title">
              <div className="carousel__content">
                <p>WELCOME TO Jamine</p>
                <h1>SMART WEB DESIGN AGENCY</h1>
                <button className="bg-color-buttom">View More</button>
              </div>
              <div className="arrow__down">
                <i className="fa-solid fa-chevron-down" />
              </div>
            </div>   
          </div>
        </div>
        <div className="service__main py-50">
          <Service />
        </div>
        <div className="blog__main">
        <Wow />
        </div>
        <div>
          <AboutSection />
        </div>
        <div className="count__main py-50">
          <Count />
        </div>
        <div>
          <News />
        </div>
        <div>
          <Address />
        </div>
        <Backtotop />
       

      </div>


    );
  }
}
