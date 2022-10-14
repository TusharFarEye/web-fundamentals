import React, { Component } from 'react'


export default class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
    </div>
    )
  }
}
