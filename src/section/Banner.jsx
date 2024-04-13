import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Banner.css"



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}


const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    };

    return (
        <div className='banner__carousel'>
            <Slider {...settings}>
                <div>
                    <img src={require('../image/banner.jpg')} alt=""  className='w-100'/>

                </div>
                <div>
                    <img src={require('../image/banner6.jpg')} alt="" className='w-100' />

                </div>
                <div>
                <img src={require('../image/banner2.jpg')} alt="" className='w-100' />
                </div>
                <div>
                <img src={require('../image/banner3.jpg')} alt="" className='w-100' />
                </div>
                <div>
                <img src={require('../image/banner4.jpg')} alt="" className='w-100' />
                </div>
                <div>
                <img src={require('../image/banner5.jpg')} alt="" className='w-100' />
                </div>
            </Slider>

        </div>
    )
}

export default Banner
