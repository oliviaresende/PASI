import React from 'react'
import { useHistory } from 'react-router'
import './style.scss'
import logo from '../../assets/logo.png'

const HeaderComponent = () => {
  const history = useHistory()
  return (
    <div className="header">
      <div className="header-menu">
        <div className="logo">
          <a href="/" ><img src={logo} alt="" /></a>
          <h1 className="logo-text">Programa de acesso à saúde inclusiva</h1>
        </div>
        <div className="menu">
          <ul className="header-list">
            <li><a href="/construction">CAPACITAÇÃO</a></li>
            <li><a href="/construction">DIREITOS</a></li>
            <li><a href="/construction">ENCONTRE SEU MÉDICO</a></li>
          </ul>
          <button className="header-button" onClick={() => (history.push("/construction"))}>Perfil</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
