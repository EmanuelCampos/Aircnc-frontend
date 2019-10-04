import React, { useState } from 'react'
import api from './services/api'
import './App.css'

import Routes from './routes'

import logo from './assets/logo.svg'

function App() {


  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
      </div>
    </div>
  )

}

export default App;
