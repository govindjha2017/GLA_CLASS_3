import React from 'react'
import "./Card.css"
function Crad(props) {
  return (
    <div className='card'>
      <h2>name: {props.name} </h2>
      <h3>age: {props.age}</h3>
      
    </div>
  )
}

export default Crad
