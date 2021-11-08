import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    render() {
        return (
            <div>
                <input id="my-input" />
                <button onClick={this.click}>전송하기</button>
            </div>
        );
    }

    click = () => {
        const input = document.querySelector('#my-input');
        console.log(input.value)
    }
}

export default UncontrolledComponent;