import React, { Component } from 'react';
import PropTypes from "prop-types";

class App_0928 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.value);
    }
    render() {
        return (
            <div>
                {this.props.value}<br></br>
                {this.props.boolvalue ? "놀러 가자" : "공부 하자"}
            </div>
        );
    }
}

App_0928.propTypes = {
    value: PropTypes.string,
    boolvalue: PropTypes.bool
};

export default App_0928;