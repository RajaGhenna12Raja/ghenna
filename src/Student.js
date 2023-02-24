import React from 'react'
import { useState } from 'react'


const Student = (props) => {
  const [name, setName] = useState(props.name)
  return (
    <div style={{background:"lightgreen", padding:10, margin:20, borderRadius:20}}>
       <h1>Student Name : {name}</h1> 
       <h3>Email : {props.email}</h3>
       <h4>Address: {props.others.address}</h4>
       <p>Mobile: {props.mobile}</p>
       <button onClick={() =>{setName('Noor')}}>Chnage Name</button>
    </div>
  )
}

export default Student