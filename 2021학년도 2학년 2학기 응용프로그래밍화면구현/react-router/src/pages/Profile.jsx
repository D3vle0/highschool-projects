export default function Profile(props) {
	const id = props.match.params.id;
	const name = props.location.search;
	const obj = new URLSearchParams(name);
	return (
		<div>
			Profile 페이지 입니다. <br></br>
			{id && <span>id는 {id} </span>}<br></br>
			{name && <span>name은 {obj.get("name")} </span>}
		</div>
	)
}