import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Comment = (props) => {
  return (
    <>
      <div className="comment-container">
        <div className="comment-left">
          <img src={props.img} alt="" />
          <div className="comment-info" >
            <h1 className="comment-name">{props.name}</h1>
            <strong className="comment-local">{props.local}</strong>
          </div>
        </div>
        <div className="comment-right">
          <div className="comment">{props.comment}</div>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
    </>
  )
}

export default Comment
