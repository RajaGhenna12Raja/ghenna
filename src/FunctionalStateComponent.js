import React from 'react'
import { useState } from 'react'

const FunctionalStateComponent = () => {
    const [data, setData] = useState(111)
    function UpDate(){
        setData(data+1)
    }
  return (
    <div style={{background:"lightgreen", padding:10, margin:20,borderRadius:20}}>
        <h3>FunctionalComponent {data}</h3>
        <button onClick={UpDate} style={{background: "green", margin:'10', padding:'10'}}>Counting Magic 111</button>
     </div>
  )   
}

export default FunctionalStateComponent