import React, { Component } from 'react'
import {Navigate} from 'react-router-dom'


export default class Profile extends Component {
  render() {
    if(!localStorage.getItem('userLogin')){
      alert("Vui Long Dang Nhap")
      return <Navigate to="/Login"/>
    }
    return (
      <div>
        profile
      </div>
    )
  }
}
