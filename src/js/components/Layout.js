import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";
import Test from "./Test";
import ChangeState from "./ChangeState";
import CheckBox from "./CheckBox";
import App from "./LogButton/App";
import LogForm from "./Form/LogForm";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Before" };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    // setTimeout(() => {
    //     this.setState({title: "After"});
    // }, 5000);

    // const title = "Welcom aaout";

    return (
      <div>
        {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/> */}
        {/* <Header title={"title2"}/> */}
        {/* {this.state.name} */}
        <Header />
        <App />
        <LogForm />
        {/* <Test /> */}
        {/* <ChangeState /> */}
        {/* <CheckBox /> */}
        {/* <LoginButton /> */}
        <Fooder />
      </div>
    );
  }
}
