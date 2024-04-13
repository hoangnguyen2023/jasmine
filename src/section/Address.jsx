import React, { useEffect } from 'react'
import WOW from "wow.js";
import "animate.css"
import "../css/address.css"


const Address = () => {
    useEffect(() => {
        const wow = new WOW({
            live: false
        });
        wow.init();
    }, []);
  return (
    <div>
        <section id="contact">
        <div className="container py-50">
          <div className="title__contact">
            <h1 className="wow animate__animated animate__bounceInDown text-center">contact</h1>
            <p className='wow animate__animated animate__bounceInDown text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dolorum voluptatem reprehenderit quaerat perspiciatis possimus magni
              nostrum incidunt delectus odit.
            </p>
          </div>
          <div className="contact__content">
            <div className="contact__map">
              <map name>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4475415374186!2d106.6927271748569!3d10.776994189371797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1711783428944!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </map>
            </div>
            <div className="contact__form">
              <form action>
                <input type="text" name placeholder="user name" />
                <input type="email" name id placeholder="Email Adress" />
                <textarea name id cols={30} rows={10} defaultValue={""} />
                <input type="button" defaultValue="submit" placeholder />
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Address
