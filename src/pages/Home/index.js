import React from 'react'
import { useHistory } from 'react-router'
import Card from '../../components/Cards'
import imagem from '../../assets/fig-1.png'
import BackgroundHome from './../../assets/background-home.svg'

import './style.scss'


const Home = () => {
  const history = useHistory()
  return (
    <>
      <div className="background-home"><img src={BackgroundHome} alt=""/></div>
      <div className="home-container">
        <div className="content-left">
          <h1 className="content-text">
            <div style={{ color: '#121212', padding: '0' }}>Conecte-se à saúde</div>
            <strong style={{ color: '#FF8E8E' }}>inclusiva</strong>
          </h1>
          <div className="button-container">
            <button className="button btn-primary" onClick={() => history.push("/professional")} >Profissional de saúde</button>
            <button className="button btn-outline" onClick={() => history.push("/patient")}>Sou paciente lgbt</button>
          </div>
        </div>
        <div className="content-img">
          <img src={imagem} alt="profissionais da saúde" />
        </div>
      </div>
      <div className="cards">
        <Card
          title="Saúde transexual"
          text="Profissional de saúde, entenda como tratar e estar qualificado para atender o público LGBTI+ e após concluir, você entrará na nossa lista de profissionais capacitados. Vocês podem se conectar e conseguir clientes etc etc"
        />
        <Card
          title="Capacite-se para atender"
          text="Profissional de saúde, entenda como tratar e estar qualificado para atender o público LGBTI+ e após concluir, você entrará na nossa lista de profissionais capacitados. Vocês podem se conectar e conseguir clientes etc etc"
        />
        <Card
          title="Saúde mental de vulneráveis"
          text="Profissional de saúde, entenda como tratar e estar qualificado para atender o público LGBTI+ e após concluir, você entrará na nossa lista de profissionais capacitados. Vocês podem se conectar e conseguir clientes etc etc"
        />
      </div>
    </>
  )
}

export default Home
