import React, { Component } from "react";
import CarouselBlog from "../components/Blog/CarouselBlog";
import CardCarousel from "../components/Blog/CardCarousel";
import Backtotop from "../section/Backtotop";

export default class Blog extends Component {
  render() {

    return <div>
      <div className="banner">
        <CarouselBlog />
      </div>
      <div className="card">
        <CardCarousel />
      </div>

      <Backtotop />

    </div>;
  }
}
