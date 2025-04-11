import Card from "./Card"

let data = [
   {name:'laptop',price:200}, {name:'phone',price:100}, {name:'keyboard',price:30}
]

const App = ()=>{
  return (
     <>
        <h1>hello</h1>
        {/* <Card/>
        <Card/>
        <Card/> */}

        {Card(data[0])}
        {Card(data[1])}
        {Card(data[2])}
     </>
  )
}


export default App;