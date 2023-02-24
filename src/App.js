import React from 'react'
import ClassStateComponent from './ClassStateComponent'
import FunctionalStateComponent from './FunctionalStateComponent'
import Student from './Student'
import StudentClass from './StudentClass'
import HideShow from './HideShow'
import Form from './Form'
import Profile from './Profile'
import Login from './Login'

const App = () => {
  return (
    <div >
      <div style={{background:"lightgreen", padding:10, margin:20, borderRadius:20}}>
        <a  href='/about'>About</a>
      </div>
      <Profile />
      <div >
          <Login />
      </div>
      <HideShow />
      <div style={{background:"lightgreen", padding:10, margin:20, borderBottomRightRadius:20}} >
             <h1>Main Component </h1>
      </div>
      <ClassStateComponent />
      <h2><FunctionalStateComponent/></h2>
       <Student name={"Anil"} email={"anil@jobhikar.com"} others={{address:"NewDelhi"}} mobile="+91-839xxxxxxxxx"/>
       <Student name={"Priya"} email={"priya@jobhikar.com"} others={{address:"Mumbai"}} mobile="+91-839xxxxxxxxx"/>
        <Student name={"Indu"} email={"indu@jobhikar.com"} others={{address:"Calcutta"}} mobile="+91-839xxxxxxxxx"/>
        <StudentClass name={"Indu"} email={"indu@jobhikar.com"} others={{address:"Calcutta"}} mobile="+91-839xxxxxxxxx"/>
        <Form />
    </div>
  )
}
export default App