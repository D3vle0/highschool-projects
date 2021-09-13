// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class Header extends Component {
	render() {
		return (
			<header>
				<h1>WEB</h1>
				웹은 WWW를 부르는 말 입니다.
			</header>
		)
	}
}

class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><a href="1.html">World</a></li>
					<li><a href="2.html">Wide</a></li>
					<li><a href="3.html">Web</a></li>
				</ul>
			</nav>
		)
	}
}

class Article extends Component {
	render() {
		return (
			<article>
				<h2>React</h2>
				react는 무슨 뜻?
			</article>
		)
	}
}

class App extends Component {
	render() {
		return (
			<html>
				<body>
					<Header></Header>
					<Nav></Nav>
					<Article></Article>
				</body>
			</html>
		);
	}
}

export default App;
