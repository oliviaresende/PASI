import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import './style.scss'
import logo from '../../assets/logo.png'

const HeaderComponent = () => {
  const history = useHistory()
  return (
    <div className="header">
      <div className="header-menu">
        <div className="logo">
          <Link to="/" ><img src={logo} alt="" /></Link>
          <h1 className="logo-text">Programa de acesso à saúde inclusiva</h1>
        </div>
        <div className="menu">
          <ul className="header-list">
            <li><Link to="/construction">CAPACITAÇÃO</Link></li>
            <li><Link to="/construction">DIREITOS</Link></li>
            <li><Link to="/construction">ENCONTRE SEU MÉDICO</Link></li>
          </ul>
          <button className="header-button" onClick={() => (history.push("/construction"))}>Perfil</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
