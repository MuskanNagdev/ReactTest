import React, { Component } from 'react'

export class Counter extends Component {
  
    constructor(props){
        super(props)
        this.state={
            counter:props.counter
        };
        this.Increment=this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
    }
    
    Increment(){
        this.setState({counter: this.state.counter+1})
    }

    Decrement(){
        this.setState({counter: this.state.counter-1})
    }


    render() {  
        const buttonStyle={
            backgroundColor:"green",
            width: '400px'
        }
        const buttonStyle2={
            backgroundColor:'red',
            width: '400px'
        }


        return (
            <>
                <div>
                    Counter {this.state.counter}
                </div>    

                <button type='button' onClick={this.Increment} style={buttonStyle}>+</button>

                <button type='button' onClick={this.Decrement} style={buttonStyle2}>-</button>
            
            </>
            
        )
  }
}

Counter.defaultProps={
    counter: 0
}
export default Counter