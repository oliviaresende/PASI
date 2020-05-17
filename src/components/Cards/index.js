import React from 'react'

import './style.scss'

const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
        <div className="card-button"><button>Vamos conectar</button></div>
      </div>
    </>
  )
}

export default Card
