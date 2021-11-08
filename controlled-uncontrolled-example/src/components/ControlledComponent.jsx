import React, { Component } from 'react';

class ControlledComponent extends Component {
    state = {
        value: '',
    };
    render() {
        const value = this.state.value;
        return (
            <div>
                <input value={value} onChange={this.change} />
                <button onClick={this.click}>Submit</button>
            </div>
        );
    }

    change = (e) => {
        this.setState({ value: e.target.value });
    }

    click = () => {
        console.log(this.state.value)
    }
}

export default ControlledComponent;