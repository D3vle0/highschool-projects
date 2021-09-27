// import logo from './logo.svg';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		/* 0927 */
		const array1 = ["one", "two"];
		const array2 = ["three", "four"];
		// const combined = [array1[0], array1[1], array2[0], array2[1]];
		const combined1 = array1.concat(array2);
		const combined2 = [...array1, ...array2]; //전개 연산자 (spread operator)
		const [first, second, third = "3", ...others] = array1;

		const qs = "?banana=10&apple=20&orange=30";
		var queryString = "";
		var chunks = [];
		function parse() {
			queryString = qs.substr(1);
			chunks = queryString.split("&");

			var result = {};
			for (var i = 0; i < chunks.length; i++) {
				var parts = chunks[i].split("=");
				var key = parts[0];
				var value = parts[1];
				result[key] = value;
			}
			return result
		}
		const obj = parse();
		/* ===== */
		return (
			<html>
				<body>
					<Header korean="한글" english="영어"></Header>
					<Nav></Nav>
					<Article></Article>
					<hr></hr>
					<h1>0927</h1>
					<div>{combined1}</div>
					<div>{combined2}</div>
					<br></br>
					<div>{first} {second} {third} {others}</div>
					<div>{qs}<br></br>{queryString}<br></br>{chunks[0]} {chunks[1]} {chunks[2]}</div>
					<div>{obj.banana} {obj.apple} {obj.orange}</div>
				</body>
			</html>
		);
	}
}

export default App;