import React from 'react'
import "../../css/carouselblog.css"

const CarouselBlog = () => {
    return (
        <div>
            <div className="carousel__blog">
                <div className="carousel__headtitle">
                    <img src={require("../../image/blog/carouselblog.jpg")} alt="" />
                    <h4 className='title text-center'>My Life Blog</h4>
                    <div className='blog__item container d-flex justify-content-center '>
                      <img src={require("../../image/blog/card1.jpg")} alt="" className='item' />
                      <img src={require("../../image/blog/card2.jpg")} alt="" className='item'/>
                      <img src={require("../../image/blog/card3.jpg")} alt="" className='item'/>
                      <img src={require("../../image/blog/card4.jpg")} alt="" className='item'/>
                    </div>
                </div>
            </div>
            <div className="gallary__content mg-100">
              <div className="title text-center">
                <h4>My Album history</h4>
                <h3>Make a Good Life</h3>
                <p>I'm a paragraph. Click here to add your own text and edit</p>
              </div>
            </div>
        </div>
    )
}

export default CarouselBlog

