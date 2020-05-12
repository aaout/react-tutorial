import React, { Component } from "react";

export default class PostItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { revewer, revewee, revew, ...props } = this.props;

    return (
      <div {...props}>
        <div>{revewer}</div>
        <div>{revewee}</div>
        <div>{revew}</div>
        <br />
      </div>
    );
  }
}
