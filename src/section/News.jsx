import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/news.css"
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

const News = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
        <div className='container'>
            <div className="news__header text-center py-50">
                <h4 className='text-muted'>News & cloud hunting</h4>
                <h3>Art Mountain & Cloud
                </h3>
                <p>The Florest - Flowers In The Forest is the most ideal spot in Lam Dong with family</p>
            </div>

            <Slider {...settings}>
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="new__image">
                                <img src={require('../image/news/sanmay1.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="new__image">
                                <img src={require('../image/news/sanmay2.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                        <div className="new__image">
                                <img src={require('../image/news/sanmay3.jpg')} className="card-img-top" alt="..." />
                            </div>                         
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                        <div className="new__image">
                                <img src={require('../image/news/sanmay4.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                        <div className="new__image">
                                <img src={require('../image/news/sanmay5.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                        <div className="new__image">
                                <img src={require('../image/news/sanmay6.jpg')} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p>08.04.2024 Am 10.37</p>
                                <br />
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>




        </div>
    )
}

export default News
