import React, { Component } from 'react'

export default class lifeCycleOne extends Component {

    constructor(props) {
      super(props)
       console.log("constructor called from lifecycle one")
    }

    componentDidMount(){
        console.log("ComponentDID Mount called from lifecycle one")
    }

    componentWillUnmount(){
        console.log("ComponentWillUnMount called from lifecycle one")
    }

    componentDidUpdate(){
        console.log("Component did update called from lifecycle one")
    }
  
    render() {
        console.log("Render called from lifecycle one")    
        return (
            <div>
                Life Cycle One  
            </div>
        )
  }
}
