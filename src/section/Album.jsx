import React from 'react'
import { HiViewfinderCircle } from "react-icons/hi2";
import "../css/album.css";


import LightGallery from 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import { NavLink } from 'react-router-dom';


const Album = () => {
   
    const onInit = () => {
        
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='App'>
            <LightGallery
                onInit={onInit}
                speed={500}

                plugins={[lgThumbnail, lgZoom, lgShare, lgRotate]} >

                <div className="album__gallary">
                    <div  className="album__item icon1">

                        <a href="../" data-caption="mountain">
                           
                            <img alt="" src={require("../image/gallary/album1.jpg")} />
                        </a>
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album2.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album2.jpg")} />
                        </NavLink>
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album3.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album3.jpg")} />
                        </NavLink>

                        {/* <img src={require("../image/gallary/album4.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album4.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album4.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album3.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album5.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album5.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album4.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item icon10">
                        <NavLink to={'../image/gallary/album6.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album6.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album5.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album7.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album7.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album6.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album8.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album8.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album7.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album9.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album9.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album8.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                    <div className="album__item ">
                        <NavLink to={'../image/gallary/album10.jpg'} data-caption="mountain">
                            <img alt="" src={require("../image/gallary/album10.jpg")} />
                        </NavLink>
                        {/* <img src={require("../image/gallary/album9.jpg")} alt /> */}
                        {/* <div className="blog__overlay">
                        <div className="blog__icon">
                            <a href={require("../image/gallary/album1.jpg")} data-fancybox="gallery" data-caption="Caption 1">
                            <HiViewfinderCircle /></a>
                        </div>
                        <div className="blog__text">
                            <h1>logo</h1>
                            <h3>climping</h3>
                        </div>
                    </div> */}
                    </div>
                </div>

            </LightGallery>




        </div>
    )
  
}

export default Album
