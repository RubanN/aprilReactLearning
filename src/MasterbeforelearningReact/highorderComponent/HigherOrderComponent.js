import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState(prev => {
            return { count: prev.count + 2 }
        })
    }
    render() {
        const { count } = this.state
        return <button onClick={this.increment}>Increment</button>
    }
}

