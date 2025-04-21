import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../component/Quote'
import "./AllQuote.css"
function AllQuote() {
    let [quotes,setQuotes] = useState([])
    async function getQuotes(){
        let res = await axios.get('http://localhost:5000/api/quotes');
        console.log(res.data.data);
        setQuotes(res.data.data)
    }
    console.log(quotes)
    useEffect(()=>{
        getQuotes()
    },[])

  return (
    <div className='allQuote'>
       {quotes.map( quote => <Quote quote={quote} />)}
    </div>
  )
}

export default AllQuote
