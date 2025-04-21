import React from 'react'
import "./Quote.css"
function Quote({quote}) {
  return (
    <div className='quote'>
      <h2>{quote.author}</h2>
      <p>{quote.text}</p>
    </div>
  )
}

export default Quote
