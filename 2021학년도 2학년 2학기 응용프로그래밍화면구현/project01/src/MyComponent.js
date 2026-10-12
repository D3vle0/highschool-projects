import React, { Component } from 'react';

class MyComponent extends Component {
    state = {
        value: 0
    };

    constructor(props) {
        super(props);
        console.log(`props: ${props.value}`);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            };
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value === 10) return false;
        return true;
    }

    render() {
        return (
            <div>
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        );
    }
}

export default MyComponent;