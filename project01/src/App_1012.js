import React, { Component } from 'react';
import MyComponent from './MyComponent'

class App1012 extends Component {
    state = {
        counter: 0
    };
    constructor(props) {
        super(props);
        console.log('App_1012.constructor');
    }
    componentDidMount() {
        console.log('App_1012.componentDidMount');
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        return (
            <div>
                <h1>안녕하세요 리액트</h1>
                <MyComponent value={this.state.counter}></MyComponent>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default App1012;
