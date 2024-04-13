import React from 'react';
import { FaUser } from "react-icons/fa"
import { IoEyeSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../../css/cardcarousel.css"


const CardCarousel = () => {
    return (
        <div>
            <div className="carousel__item py-60 ">
                <div className="card mb-2 container" style={{ maxWidth: 1200 }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={require('../../image/blog/card1.jpg')} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="card__body__header d-flex justify-content-start">
                                    <FaUser />
                                    <div className="body__content">
                                        <ul>
                                            <li><a href="">Admin</a></li>
                                            <li><a href="">05.4.2024 a.m</a></li>
                                        </ul>
                                    </div>

                                </div>

                                <h5 className="card-title text-muted">Beyond the Brim</h5>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                            <div className="card__comment card-footer">
                                <ul><li className=''><CiHeart /></li></ul>
                                <ul className='view__comment d-flex align-items-center' >
                                    <li className=''><IoEyeSharp /> View</li>
                                    <li className=''><FaComment /></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="carousel__item">
                <div className="card mb-2 container" style={{ maxWidth: 1200 }}>
                    <div className="row g-0">

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="card__body__header d-flex justify-content-start">
                                    <FaUser />
                                    <div className="body__content">
                                        <ul>
                                            <li><a href="">Admin</a></li>
                                            <li><a href="">05.4.2024</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <h5 className="card-title text-muted">Beyond the Brim</h5>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                            <div className="card__comment card-footer">
                                <ul><li className=''><CiHeart /></li></ul>
                                <ul className='view__comment d-flex align-items-center' >
                                    <li className=''><IoEyeSharp /> View</li>
                                    <li className=''><FaComment /></li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img src={require('../../image/blog/card2.jpg')} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel__item py-60 ">
                <div className="card mb-2 container" style={{ maxWidth: 1200 }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={require('../../image/blog/card3.jpg')} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="card__body__header d-flex justify-content-start">
                                    <FaUser />
                                    <div className="body__content">
                                        <ul>
                                            <li><a href="">Admin</a></li>
                                            <li><a href="">05.4.2024</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <h5 className="card-title text-muted">Beyond the Brim</h5>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                            <div className="card__comment card-footer">
                                <ul><li className=''><CiHeart /></li></ul>
                                <ul className='view__comment d-flex align-items-center' >
                                    <li className=''><IoEyeSharp /> View</li>
                                    <li className=''><FaComment /></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="carousel__item py-60-bottom">
                <div className="card mb-2 container" style={{ maxWidth: 1200 }}>
                    <div className="row g-0">

                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="card__body__header d-flex justify-content-start">
                                    <FaUser />
                                    <div className="body__content">
                                        <ul>
                                            <li><a href="">Admin</a></li>
                                            <li><a href="">05.4.2024</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <h5 className="card-title text-muted">Beyond the Brim</h5>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text">Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags.</p>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                            <div className="card__comment card-footer">
                                <ul><li className=''><CiHeart /></li></ul>
                                <ul className='view__comment d-flex align-items-center' >
                                    <li className=''><IoEyeSharp /> View</li>
                                    <li className=''><FaComment /></li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <img src={require('../../image/blog/card4.jpg')} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CardCarousel;
