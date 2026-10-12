import React from "react";
export default function Example3() {
	const [state, setState] = React.useState({ count: 0 });
	return (
		<div>
			<p>당신이 클릭한 횟수는 {state.count} 번 입니다. </p>
			<button onClick={click}>Click me</button>
		</div>
	);
	function click() {
		setState({ count: state.count + 1 });
	};
}