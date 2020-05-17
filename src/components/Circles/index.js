import React from 'react'

import './style.scss'

const Circle = (props) => {
  return (
    <>
      <div className="circle-container">
        <div className="circle-text">{props.text}</div>
      </div>
    </>
  )
}

export default Circle
