import React from "react";
import userData from "./userData";
import LoginButton from "./LoginButton";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: userData,
    };
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state.isLoggedIn);
  }

  handleChange() {
    this.setState((e) => {
      return {
        isLoggedIn: !e.isLoggedIn,
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "LOG IN" : "LOG OUT";
    // const userinfo = this.state.user.map((e) => {
    //   return (
    //     <Joke key={e.id} name={e.userName} log={e.logstate} />
    //   );
    // });

    return (
      <div>
        <button onClick={this.handleChange}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}
