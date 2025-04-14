import React, { useState } from 'react'

function Counter() {
    // let count = 10;
    let [count,setCount] = useState(10)
 

    let increase = ()=>{
        // count +=1;
        // console.log('clicked!',count)
        setCount(count+1)
    }

  return (
    <div>
      <p>{count}</p>
       <button onClick={increase}>increase</button>
    </div>
  )
}

export default Counter
