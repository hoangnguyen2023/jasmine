import React from 'react'
import "../../css/gallary.css"


const CarouselGallary = () => {
  return (
    <div>
        <div>
            <div className="carousel__gallary">
                <div className="carousel__headtitle">
                   <img src={require('../../image/gallary/bannergallary.jpg')} alt="" />
                    <h4 className='title text-center'>My Life Gallary </h4>
                    <div className='gallary__item container'>
                      <img src={require("../../image/gallary/gallary1.jpg")} alt="" className='item' />
                      <img src={require("../../image/gallary/gallary2.jpg")} alt="" className='item'/>
                      <img src={require("../../image/gallary/gallary3.jpg")} alt="" className='item'/>
                      <img src={require("../../image/gallary/gallary4.jpg")} alt="" className='item'/>
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

      
    </div>
  )
}

export default CarouselGallary
