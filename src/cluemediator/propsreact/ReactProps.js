import React, { Component } from "react";
import Greeting from "./Greeting";

class ReactProps extends Component {
    render() {
        return (
            <div>
                <Greeting greeting={"Welcome to home page!"} />
                <p>Here is the testing page created by Clue Mediator.</p>

            </div>
        )
    }
}

export default ReactProps;
