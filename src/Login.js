import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [usererr, setUsererr] = useState(false)
    function loginHandle(e) {
        e.preventDefault()
    }
     function userHandler(e){
        let item=e.target.value
        if(item.length<3){
            setUsererr(true)
        }else{
            setUsererr(false)
        }
         console.warn(e.target.value.length);
     }  
  return 
  (
    <div >
        <form onSubmit={loginHandle}>
           <h1>Login </h1>
           <input type="text" placeholder="Enter Used Id" onChange={userHandler}/>{usererr?<span>Invalid User</span>:''}
           <input type="text" placeholder="Enter Password"/><br></br>
           <button type='submit'>Login</button>
           </form>
    </div>
  )
}
export default Login