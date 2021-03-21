import React, { Component } from "react"

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount
    }
  }

  render() {
    // let counter = 0

    return (
      <div>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </div>
    )
  }

  changeCount(amount) {
    this.setState({ count: this.state.count + amount })
    // function version, much safer thatn the non-f version
    // this.setState(prevState =>{ return{count: prevState.count + amount} })
  }
}
