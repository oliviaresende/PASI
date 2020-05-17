import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import imagem from '../../assets/fig-3.png'
import backgroundPatient from '../../assets/background-patient.svg'

import './style.scss'

const Patient = () => {
  return (
    <>
      <div className="background-patient-container">
        <div className="patient-img">
          <img src={imagem} alt="" />
        </div>
        <div className="background-patient"><img src={backgroundPatient} alt=""/></div>
      </div>
      <div className="patient-container">
        <h1 className="patient-text">
          <span style={{ color: '#121212' }}>ENCONTRE PROFISSIONAL DE SAÚDE CAPACITADO PARA </span>
          <span style={{ color: '#FF8E8E' }}>SUA NECESSIDADE</span>
        </h1>
        <div className="patient-input">
          <FontAwesomeIcon icon={faSearch} className="input-icon" />
          <input placeholder="Digite qual profissional deseja encontrar" />
        </div>
        <div className="patient-body" >
          <div className="button-container">
            <button className="button btn-primary">Buscar</button>
            <button className="button btn-outline">Voltar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Patient
