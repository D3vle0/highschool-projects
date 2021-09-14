import { Component } from 'react';

class Header extends Component {
	render() {
		const style = {
			color: "red",
			fontWeight: "bolder"
		};
		return (
			<header>
				<h1 style={style}>WEB</h1>
				웹은 WWW를 부르는 말 입니다.<br></br>
				한글: {this.props.korean}<br></br>
				영어: {this.props.english}
			</header>
		)
	}
}

export default Header;