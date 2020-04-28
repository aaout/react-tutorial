import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "aaout";
        }

    render() {
    return (
    <div>
        <div>
            <Header />
        </div>
        <h1>He is {this.name}!!!</h1>
        <div>
            <Fooder />
        </div>
    </div>
    );
    }
}
