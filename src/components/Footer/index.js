import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import './style.scss'

const Footer = () => {

  return (
    <div className="footer" >
      <div className="footer-container">
        <div className="logo">
          <Link to="/" ><img src={logo} alt="" /></Link>
        </div>
        <ul className="footer-list">
          <li><Link to='/construction'>Conheça-nos</Link></li>
          <li><Link to ="/construction">Invista na mudança</Link></li>
          <li><Link to ="/construction">Suporte</Link></li>
          <li><Link to ="/construction">Canal de informação</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
