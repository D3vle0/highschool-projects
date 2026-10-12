import React, { Component } from 'react';

class App_1005 extends Component {
	componentDidMount() {
		console.log("componentDidMount")
	}
	constructor(props) {
		super(props);
		console.log("constructor")

		this.state = {
			loading: true,
			formData: "no data",
		};
		this.handleData = this.handleData.bind(this);
		setTimeout(this.handleData, 4000);
	}
	handleData() {
		// const data = "new data";
		// const { formData } = this.state;
		// this.loading = false;
		// this.formData = "new new data";

		this.state.loading = false;
		this.state.formData = "new new data";

		// this.setState({
		//     loading: false,
		//     formData: data,
		// });
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<span>로딩중 상태: {String(this.state.loading)}</span><br></br>
				<span>{this.state.formData}</span>
			</div>
		);
	}
}

export default App_1005;