import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [loggedIn, setLoggedIn] = useState(1)
  return (
    <div style={{background:"lightgreen", padding:10, margin:20,borderRadius:20}}>
          {loggedIn==1 ? <h1>Welcome User 1</h1>
          :loggedIn==2 ?<h1>Welcome User 2</h1>
          :<h1>Welcome Guest</h1>}
    </div>
  )
}

export default Profile