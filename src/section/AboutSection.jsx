import React from 'react'
import "../css/about.css"

const AboutSection = () => {
  return (
    <div>
      <div className='about__title py-50 text-center'>

        <h5 className='about__title__top text-muted'>About Me</h5>
        <h1>Make a Good Life</h1>
        <p className='py-20'>I'm Shane, a girly girl and lover of life. Join me on the journey to find latest in fashion.</p>

      </div>
      <div className="about__main" >
        <div className='about__item'>
          <div className='about__img__stand'>
            <img src={require('../image/about/about6.jpg')} alt="" className='hinhdung' />

          </div>

          <div className='about__img__col'>
            <img src={require('../image/about/about8.jpg')} alt="" className='ngang' />

          </div>

        </div>
        <div className='about__content'>
          <h2 className='content__title'>jasmine vo</h2>
          <div className='Content__title_person'>
            <ul>
              <li>
                <a href="">My Person Life</a>
              </li>
              <li>
                <a href="">life , swim , mountain</a>
              </li>
            </ul>

          </div>

          <p>
            Isabella Reeves My personal story Life, Faith, Confidence I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <br />
          <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out</p>
          <br />
          <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out</p>

          
          <div className='view__more'>
            <a href=""><button className='btn__about'>
              view more
            </button></a>

          </div>
        </div>



      </div>

    </div>
  )
}

export default AboutSection
