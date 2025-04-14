import React, { useState } from 'react'

function Counter() {
    // let counter = 10;
    let [counter,setCounter] = useState(10)

    let increase = ()=>{
        // counter +=1;
        // console.log('clicked',counter)
        setCounter(counter+1)
    }
  return (
    <div>
       <p>{counter}</p>
       <button onClick={increase}>increase</button>
    </div>
  )
}

export default Counter
