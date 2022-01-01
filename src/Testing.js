import React, { Component, PureComponent } from 'react';

class Testing extends PureComponent {
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = {
            name: "test"
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate(prev, next) {
        console.log("componentDidUpdate")
        console.log("prev", prev)
        console.log("next", next)
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>Welcome</h1>
                <button onClick={() => this.setState({ name: "SAjjad" })}>Add</button>
                <button onClick={() => this.setState({ name: "umesh" })}>Add1</button>
                <button onClick={() => this.setState({ name: "" })}>Add2</button>
            </div>
        );
    }
}

export default Testing;