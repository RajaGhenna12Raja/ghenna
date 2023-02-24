import React from 'react'
import { useState } from 'react'

const Form = () => {
        const [name, setName] = useState(' ')
        const [tandc, setTandc] = useState(false)
        const [interest, setInterest] = useState(' ')

    function getFormData(e){
        console.warn(name,tandc,interest)
        e.preventDefault()
    }
  return (
    <div style={{background:"lightgreen", padding:10, margin:20, borderRadius:20}}>
        <h1>Handle Form In React</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br></br>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Options</option>
                <option>Marvel</option>
                <option>Dc Comics</option>
                <option>Shaktiman</option>
            </select><br></br>
            <input onChange={(e)=>setTandc(e.target.checked)} type="checkbox"/><span>Accept Terms and Conditions</span><br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
export default Form