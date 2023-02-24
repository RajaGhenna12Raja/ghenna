import React, { Component } from 'react'

export default class StudentClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
                  name: "TestName",
                  email : "test@gmail.com",
                  address: "TestAddress",
                  mobile: 9822222222,
        }
    }
    render() {
        return ( 
              <div style={{background:"lightgreen", padding:10, margin:20,borderRadius:20}}>
                <h1>StudentClass Component</h1>
               <h3>Student Name : {this.state.name}</h3> 
              <h3>Email : {this.state.email}</h3>
               <h4>Address: {this.state.address}</h4>
                <p>Mobile: {this.state.mobile}</p>
                <button onClick={() =>{this.setState({name:"Nishoo",email:"nishoo@gmail.com", address:"5333 sector 40 Chandigarh", mobile:"981222333"})}}>Change Class ComponentName</button>
            </div>
        )
    }
}