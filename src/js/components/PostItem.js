import React, { Component } from "react";

export default class PostItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { revewer, revewee, revew, ...props } = this.props;

    return (
      <div {...props}>
        <div>
          {revewer}→{revewee}
        </div>
        <div>Content: {revew}</div>
        <br />
      </div>
    );
  }
}
