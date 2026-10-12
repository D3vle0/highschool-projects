import React, { Component } from 'react';

class UncontrolledComponent extends Component {
	inputRef = React.createRef();
	render() {
		console.log("init render");
		return (
			<div>
				<input ref={this.inputRef} />
				<button onClick={this.click}>전송하기</button>
			</div>
		);
	}

	componentDidMount() {
		console.log("componentDidMount", this.inputRef);
	}

	click = () => {
		// const input = document.querySelector('#my-input');
		// console.log(input.value)
		console.log(this.inputRef.current.value);
	}
}

export default UncontrolledComponent;