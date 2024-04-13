import React from 'react'
import "../css/service.css"
import { NavLink } from 'react-router-dom'


const Service = () => {
  return (
    <div>
      <div className="service ">
        <div className="service__title__header py-30">
          <div className="services__title">
            <p className='title'>OUR NEWS & ARTICLES</p>
            <h1>Always Makes Me Smile</h1>
            <p className='service__title__content'>
              We are committed to providing our customers with exceptional service while offering our employees the best training.
            </p >
          </div>
        </div>

        <div className="service__content">
          <div className="service__item">
            <img src={require("../image/service/service8.jpg")} />
            <div className="service__detail">
              <div className='service__icon'>
                <h5>Love & Mountain</h5>
                < NavLink to="" className="service__object"
                  style={({ isActive }) => ({
                    color: '#fff',
                    fontSize: "1rem",
                    textDecoration: "none",
                                        
                  })}
                >Explore </NavLink>

              </div>

            </div>
          </div>
          <div className="service__item">
            <img src={require("../image/service/service6.jpg")} />
            <div className="service__detail">
             <div className='service__icon'>
                <h5>Life & Career</h5>
                < NavLink to="" className="service__object"
                   style={({ isActive }) => ({
                    color: '#fff',
                    fontSize: "1rem",
                    textDecoration: "none",
                                        
                  })}
                >Explore </NavLink>

              </div>
            </div>
          </div>
          <div className="service__item">
            <img src={require("../image/service/service2.jpg")} />
            <div className="service__detail">
           <div className='service__icon'>
                <h5>General & Discussion</h5>
                < NavLink to="" className="service__object"
                   style={({ isActive }) => ({
                    color: '#fff',
                    fontSize: "1rem",
                    textDecoration: "none",
                                        
                  })}
                >Explore </NavLink>

              </div>
            </div>
          </div>
          <div className="service__item">
            <img src={require("../image/service/service3.jpg")} />
            <div className="service__detail">
              <div className='service__icon'>
                <h5>Love & Marriage</h5>
                < NavLink to="" className="service__object"
                   style={({ isActive }) => ({
                    color: '#fff',
                    fontSize: "1rem",
                    textDecoration: "none",
                                        
                  })}
                >Explore </NavLink>

              </div>
            </div>
          </div>
          <div className="service__item">
            <img src={require("../image/service/service4.jpg")} />
            <div className="service__detail">
            <div className='service__icon'>
                <h5>Nutrition & Fitness </h5>
                < NavLink to="" className="service__object"
                   style={({ isActive }) => ({
                    color: '#fff',
                    fontSize: "1rem",
                    textDecoration: "none",
                                        
                  })}
                >Explore </NavLink>

              </div>
            </div>
          </div>
          <div className="service__item">
            <img src={require("../image/service/service5.jpg")} />
            <div className="service__detail">
             <div className='service__icon'>
                <h5>Nutrition & Fitness </h5>
                < NavLink to="" className="service__object"
                 style={({ isActive }) => ({
                  color: '#fff',
                  fontSize: "1rem",
                  textDecoration: "none",
                                      
                })}
                >Explore </NavLink>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service
