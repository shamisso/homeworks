import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: +props.initial
    };
  }

  minusHandler = (e) => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    });
    e.preventDefault();
  };

  plusHandler = (e) => {
    const { counter } = this.state;

    this.setState({
      counter: counter + 1
    });
    e.preventDefault();
  };

  render() {
    const { counter } = this.state;

    return <div>
      <a className="left" href="#" onClick={this.minusHandler}>-</a>
      { counter }
      <a className="right" href="#" onClick={this.plusHandler}>+</a>
    </div>;
  }
}