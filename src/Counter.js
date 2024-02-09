import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <p>This is Exercise 2 of Assignment - 01 of React</p>
        <h3>Hello from Counter Class</h3>
        <h4>Count : {this.state.count}</h4>
        <button onClick={this.incrementCount}>Increment Count</button>{" "}
        <button onClick={this.resetCount}>Reset</button>
      <hr></hr>

      </div>
    );
  }
}
