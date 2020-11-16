import React, { Component } from 'react'

export default class classcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: "текст стейт",   
            counter: 0,
        }
        
        // this.handleClick=this.handleClick.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.nulify = this.nulify.bind(this)
    }
    
    handleClick(){
        this.setState({
            text: "текст сет стейт"
        })
    }

    increment(){
        this.setState( state =>( {
            counter: state.counter+1
        }))
    }
    decrement(){
        this.setState( state =>( {
            counter: state.counter-1
        }))
    }
    nulify(){
        this.setState({
            counter:0
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick.bind(this)} >Click to change text</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment} >+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.nulify}>Clear</button>
            </div>
        )
    }
}
