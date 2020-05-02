import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <header className="navbar">
        This is the Header!
        {/* <Title title={this.props.title}/>
                <input value={this.props.title} onChange={this.handleChange.bind(this)}/> */}
      </header>
    );
  }
}
