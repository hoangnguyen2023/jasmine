import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'


export default class HomeTemplates extends Component {
  render() {
    return (

      <>
        <Header />
        <div>
          <Outlet />

        </div>

        <Footer />


      </>
    )
  }
}
