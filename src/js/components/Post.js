import React, { Component } from "react";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  }

  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}
