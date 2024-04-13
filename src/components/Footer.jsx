import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className='footer__main'>
      <div className="footer_item">
        <div className="footer_content">
          <h3>About Me</h3>
          <p><a href="/">Home</a></p>
          <p><a href="/Gallary">Gallarry</a></p>
          <p><a href="/Blog">Blog</a></p>
          <p><a href="/About">About</a></p>
          <p><a href="/Contact">Contact</a></p>
          <div className="footer_socail">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-google-plus-g" />
            <i className="fab fa-twitter" />
          </div>
        </div>
        <div className="footer_content">
          <h3>Twitter Us</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, natus illo. Consequatur maiores veniam
            est.</p>
          
        </div>
        <div className="footer_content">
          <h3>SUBSCRIBE US</h3>
          <div className="gerister">
            <input placeholder="Enter your email" className="input" name="email" type="email" />
            <button className="button">Subscribe</button>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, natus illo. Consequatur maiores veniam
            est.</p>
          
        </div>
        <div className="footer_content">
          <h3>SUBSCRIBE US</h3>
          <div className="gerister">
            <input placeholder="Enter your email" className="input" name="email" type="email" />
            <button className="button">Subscribe</button>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, natus illo. Consequatur maiores veniam
            est.</p>
          
        </div>
      </div>
      <div className="footer_copyright">
        <p>© 2023 Copyright All rights reserved.Design website team 1</p>
      </div>
    </div>
  )
}

export default Footer

