import React from 'react'
import { useState } from 'react'

const HideShow = () => {
    const [status, setStatus] = useState(true)
  return (
    <div style={{background:"lightgreen", padding:10, margin:20, borderRadius:20, alignContent:'center'}}>{
            status? <h1>Jadu Button Hide Show</h1>:null
        }
        {/* <button onClick={() =>setStatus(false)}>Hide</button> */}
         <button onClick={() =>setStatus(!status)}>Show/Hide</button>
    </div>
  )
}

export default HideShow