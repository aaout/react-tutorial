import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
    };
  }
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <p>Placeholder text here {this.props.title}</p>
      </div>
    );
  }
}
