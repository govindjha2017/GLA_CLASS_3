import React from 'react'

import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
      <h2>name: {props.name}</h2>
      <h3>age: {props.age}</h3>
    </div>
  )
}

export default Card
