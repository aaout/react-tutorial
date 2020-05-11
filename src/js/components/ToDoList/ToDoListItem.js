import React, { Component } from "react";
// import "./ToDoListItem.css";

class ToDoListItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, description, userimg, ...props } = this.props;

    return (
      <div className="ToDoListItem" {...props}>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
        {/* <div>{this.selectImage(userimg)}</div> */}
        <img src={userimg} width="200" height="200" />
        <br />
      </div>
    );
  }
}
export default ToDoListItem;
