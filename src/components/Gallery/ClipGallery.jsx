import React from 'react'
import "../../css/clipgallery.css";

const ClipGallery = () => {
    return (
        <div>
            <div className="clipgallery__main">
                <div className="clipgallery__title text-center py-50">
                    <h4 className='text-secondary'>My Album history</h4>
                    <h3>Make a Good Life</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit</p>

                </div>
                <div className="clipvideo__content">
                    <div className="clipvideo__item  py-50">
                        <iframe width="900" height="600"
                            src="https://www.youtube.com/embed/uoJWWJErmNI?si=15sMWBwEN2BmXdIq"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default ClipGallery
