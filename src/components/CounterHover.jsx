import React, { Component } from 'react'

class CounterHover extends Component {
  render() {
    return (
      <h3 onMouseOver={this.props.increment}>
        Visited {this.props.count} times
      </h3>
    )
  }
}

export default CounterHover