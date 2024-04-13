import React, { Component } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header__top__social">
          <div className="header__main_social">
            <div className="header__social">
              <NavLink className="a" to="">
                <i class="fa-brands fa-facebook"></i>
              </NavLink>
              <NavLink className="a" to="">
                <i class="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink className="a" to="">
                <i class="fa-brands fa-twitter"></i>
              </NavLink>
              <NavLink className="a" to="">
                <i class="fa-brands fa-pinterest"></i>
              </NavLink>
              <NavLink className="a" to="">
                <i class="fa-solid fa-magnifying-glass"></i>
              </NavLink>


              {/* <a href="/Profile">Profile</a>
              <a href="/Login">Login</a> */}

            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="header">
            <div className="header__detail">
              <nav className="header__main">
                <ul className="header__menu">
                  <li className="">
                    <NavLink  to="/Home"><i className="fa-solid fa-dice-d20 logo__size"></i>Jasmine</NavLink>
                  </li>
                  <li className="is-active">
                    <NavLink className="a" to="/Home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink className="a" to="/Gallary">Gallary</NavLink>
                  </li>

                  <li>
                    <NavLink className="a" to="/Blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink className="a" to="/About">About Me</NavLink>
                  </li>
                  <li>
                    <NavLink className="a" to="/Register">Register</NavLink>

                  </li>


                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
