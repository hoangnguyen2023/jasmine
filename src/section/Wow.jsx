import React, { useEffect } from 'react';
import WOW from "wow.js";
import "../css/Wow.css";
import 'animate.css';
import { NavLink } from 'react-router-dom';

const Wow = () => {
    useEffect(() => {
        const wow = new WOW({
            live: false
        });
        wow.init();
    }, []);

    return (
        <div className='wow__main'>
            <div className='jumbotron bg-sky Blog__icon'>
                <img src={require('../image/blog/thiennhien.jpg')} alt="" className='stones' />
                <div className='blog__head'>
                    <p className="animate__animated animate__backInDown animate__delay-2s" >Story of The Week </p>
                    <a href="" className="animate__animated animate__fadeInLeft animate__delay-3s">the story behind "i'm about to love you ”an interview with yoga my life</a>
                </div>

            </div>
            <div className='blog__title py-50 text-center'>
                

                <h5 className='blog__title__top'>All  My Stories</h5>
                <h1>Make a Good Life</h1>
                <p className='py-20'>I'm Shane, a girly girl and lover of life. Join me on the journey to find latest in fashion.</p>

            </div>

            <div className='container Blog__content'>
                <div className='card animate__animated animate__backInLeft animate__delay-4s'>
                    <img src={require('../image/blog/gym.jpg')} alt="" className='card-img-top' />
                    <div className='card-body blog__item'>
                        <p className='card-text item'>June 26 ,2024 - 2 min</p>
                        <NavLink to="" className='card-title'>festival mountain</NavLink>
                        <p className='card-text'>See the full program for the upcoming festival. Early bird tickets are on sale now.</p>
                    </div>
                </div>
                <div className='card animate__animated animate__fadeInLeft animate__delay-5s'>
                    <img src={require('../image/blog/mountain.jpg')} alt="" className='card-img-top' />
                    <div className='card-body blog__item'>
                        <p className='card-text item'>June 26 ,2024 - 2 min</p>
                        <NavLink to="" className='card-title'>festival mountain</NavLink>
                        <p className='card-text'>See the full program for the upcoming festival. Early bird tickets are on sale now.</p>
                    </div>
                </div>
                <div className='card animate__animated animate__bounceInUp animate__delay-4s'>
                    <img src={require('../image/blog/yoga4.jpg')} alt="" className='card-img-top' />
                    <div className='card-body blog__item'>
                        <p className='card-text item'>June 26 ,2024 - 2 min</p>
                        <NavLink to="" className='card-title'>festival mountain</NavLink>
                        <p className='card-text'>See the full program for the upcoming festival. Early bird tickets are on sale now.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Wow;
