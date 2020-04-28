import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: "Before"};
        }

    render() {
        setTimeout(() => {
            this.setState({title: "After"});
        }, 5000);

        // const title = "Welcom aaout";

        return (
            <div>
                <Header title={this.state.title}/>
                <Header title={"title2"}/>
                {/* {this.state.name} */}
                <Fooder />
            </div>
        );
    }
}
