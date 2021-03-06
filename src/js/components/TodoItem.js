import React from "react";

export default class TodoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}
