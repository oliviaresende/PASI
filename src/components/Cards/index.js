import React from 'react'
import { useHistory } from 'react-router'

import './style.scss'

const Card = (props) => {
  const history = useHistory()
  return (
    <>
      <div className="card-container">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
        <div className="card-button" onClick={()=>(history.push("/construction"))}><button>Vamos conectar</button></div>
      </div>
    </>
  )
}

export default Card
