// import logo from './logo.svg';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<html>
				<body>
					<Header korean="한글" english="영어"></Header>
					<Nav></Nav>
					<Article></Article>
				</body>
			</html>
		);
	}
}

export default App;
