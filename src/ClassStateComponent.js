import React, { Component } from 'react'

export default class ClassStateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
             data: 1
        }
    }
    apple(){
        this.setState({data: this.state.data+1})
    }
    render() {
        return (
            <div style={{background:"lightgreen", padding:10, margin:20,borderRadius:20}}>
                <h3>{this.state.data}</h3>
                <button onClick={() =>this.apple()} style={{background:"green"}}>Click to Starts Counting</button>
            </div>
        )
    }
}
