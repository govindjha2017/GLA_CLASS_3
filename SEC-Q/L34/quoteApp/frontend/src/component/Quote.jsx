import React from 'react'

function Quote({quote}) {
  return (
    <div>
       <h2>{quote.author}</h2>
       <p>{quote.text}</p>
    </div>
  )
}

export default Quote
