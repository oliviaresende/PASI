import React from 'react'
import './style.scss'
import logo from '../../assets/logo.png'

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <div className="logo">
          <a href="/" ><img src={logo} alt="" /></a>
          <h1 className="logo-text">Programa de acesso à saúde inclusiva</h1>
        </div>
        <div className="menu">
          <ul className="header-list">
            <li><a href="/">CAPACITAÇÃO</a></li>
            <li><a href="/">DIREITOS</a></li>
            <li><a href="/">ENCONTRE SEU MÉDICO</a></li>
          </ul>
          <button className="header-button">Perfil</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
