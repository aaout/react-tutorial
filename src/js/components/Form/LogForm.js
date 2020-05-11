import React, { Component } from "react";

export default class LogForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    localStorage.setItem(name, value);
    console.log(this.state.name);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <h1>
          {localStorage.getItem("firstName")}　
          {localStorage.getItem("lastName")}
        </h1>
      </form>
    );
  }
}
