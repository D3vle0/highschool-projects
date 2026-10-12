import { NavLink } from "react-router-dom"
const activeStyle = { fontWeight: 'bold', color: 'green' };
const fnClick = () => {
	document.location.href = '/'; // 페이지 재 갱신
}

export default function NavLinks(props) {
	return (
		<ul>
			<li>
				<NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
			</li>
			<li>
				<NavLink to="/profile" exact activeStyle={activeStyle}>profile</NavLink>
			</li>
			<li>
				<NavLink to="/profile/1" exact activeStyle={activeStyle}>profile 1</NavLink>
			</li>
			<li>
				<NavLink to="/about" exact activeStyle={activeStyle}>about</NavLink>
			</li>
			<li>
				<NavLink to="/about?name=Devleo&age=18&grade=2nd" exact activeStyle={activeStyle}>about (qs)</NavLink>
			</li>
			<li>
				<NavLink to="/login" exact activeStyle={activeStyle}>login</NavLink>
			</li>
			<li>
				<div onClick={fnClick}>js routing</div>
			</li>
		</ul>
	)
}
