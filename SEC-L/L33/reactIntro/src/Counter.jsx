import React, { useState } from 'react'

function Counter() {
    let [counter,setCounter] = useState(10)
    // let counter = 10;
    let increase = ()=>{
        console.log('clicked');
        // counter +=1;
        // console.log(counter)
        setCounter(counter+1)
    }
  return (
    <div>
         {counter}
         <br></br>
         <button onClick={increase}>increase</button>
    </div>
  )
}

export default Counter
