import React from "react";
export default function Example3() {
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		console.log("componentDidMount", count);
		return () => {
			console.log("componentWillUnmount (1)");
		}
	}, []); // 빈 배열 붙으면 콘솔로그 안찍힘
	// dependency list
	React.useEffect(() => {
		console.log("componentDidUpdate", count);
		return () => {
			console.log("componentWillUnmount (2)");
		}
	}, [count]); // 빈 배열 붙으면 콘솔로그 안찍힘
	return (
		<div>
			<p>당신이 클릭한 횟수는 {count} 번 입니다. </p>
			<button onClick={click}>Click me</button>
		</div>
	);
	function click() {
		setCount(count + 1)
	};
}