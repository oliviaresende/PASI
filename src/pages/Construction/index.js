import React from 'react'
import imagem from '../../assets/fig-4.png'
import './style.scss'


const Construction = () => (
  <div className="construction-container">
    <img className="construction-img" src={imagem} alt="" />
    <h1 className="constuction-text-1">
      <span style={{ color: '#FF8E8E' }}>Ops</span>
      <span style={{ color: '#121212' }}>, parece que você foi para uma página que ainda está em </span>
      <span style={{ color: '#FF8E8E' }}>construção</span>
      <span style={{ color: '#121212' }}>.</span>
    </h1>
    <p className="constuction-text-2">Estamos trabalhando com tudo para atendê-los melhor.</p>
    <p className="constuction-text-3">Caso seja esteja interessado no desenvolvimento, entre em contato para investir no futuro da saúde humanizada.</p>
  </div>
)

export default Construction
