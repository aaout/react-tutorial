import React from "react";

export default class ChangeState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div className="setstate">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
