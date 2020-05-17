import React from 'react'
import logo from '../../assets/logo.png'

import './style.scss'

const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer-container">
        <div className="logo">
          <a href="/" ><img src={logo} alt="" /></a>
        </div>
        <ul className="footer-list">
          <li><a href="/construction">Conheça-nos</a></li>
          <li><a href="/construction">Invista na mudança</a></li>
          <li><a href="/construction">Suporte</a></li>
          <li><a href="/construction">Canal de informação</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
