import React from 'react'
import "../css/bannerabout.css"

const BannerAbout = () => {
  return (
    <div>
          <div>
            <div className="banner__about">
                <div className="banner__headtitle">
                   <img src={require('../image/about/bannerabout2.jpg')} alt="" />
                    <h4 className='banner__title'>My Life Cycle </h4>
                    <div className='about__item container'>
                      <img src={require("../image/gallary/gallary4.jpg")} alt="" className='item'/>
                    </div>
                </div>
            </div>
            <div className="header__title mgbottom-200 text-center ">
                {/* <h4 className='text-muted'> About Me </h4>
                <h3>Hello-my name is  Jasmine  vo</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ipsum ipsa fuga magnam veritatis iure fugiat! Placeat doloremque maxime quod eligendi, explicabo facere libero expedita dolore aperiam nobis aut eaque. Quaerat maiores eius adipisci nostrum numquam consequatur accusantium delectus quae ad alias aspernatur eveniet facilis quas vitae, enim eum praesentium repudiandae fugiat, maxime aliquam. Nisi, harum tempore porro eum adipisci repudiandae voluptatem labore, mollitia explicabo repellendus id accusamus animi rem quis quod tempora ad! Porro exercitationem temporibus incidunt ea consectetur sit minus dolor eum vitae distinctio. Eaque optio nesciunt omnis, maxime repellat ut neque, totam, tempore possimus doloribus cum ad.</p> */}
            </div>
           
        </div>
      
    </div>
  )
}

export default BannerAbout
