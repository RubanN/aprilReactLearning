import React, { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    handleInrment = () => {
        this.setState((prev) => ({
            counter: prev.counter + 1
        }))
    }
    handleDecrement = () => {
        this.setState((prev) => ({
            counter: prev.counter - 1
        }))
    }
    render() {
        return (
            <div style={{ margin: 20 }}>
                <button onClick={this.handleInrment} style={{ marginRight: 20 }}>Click to increment by 1</button>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleDecrement}>Click to decrease by 1</button>

            </div>
        )
    }
}

export default State;
