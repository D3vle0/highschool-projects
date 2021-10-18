import querystring from 'query-string';

export default function About(props) {
	const searchParams = props.location.search;
	// const obj = new URLSearchParams(searchParams);
	const query = querystring.parse(searchParams);
	return (
		<div>
			이름: {query['name']}<br />
			나이: {query['age']}<br />
			학년: {query['grade']}<br />
			{/* http://localhost:3000/about?name=%EB%B0%B0%EC%83%81%ED%98%81&age=18&grade=2nd */}
		</div>
	)
}