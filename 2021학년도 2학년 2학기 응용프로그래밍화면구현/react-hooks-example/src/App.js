import React, { useState, useEffect } from 'react';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import useWindowWidth from './Hooks/useWindowWidth';
import Example7 from './components/Example7';
import Example11 from './components/Example11';
import Example12 from './components/Example12';
import Example13 from './components/Example13';

function WindowWidthExample() {
	const width = useWindowWidth();
	return <p>현재 브라우저 창 너비: {width}px</p>;
}

const examples = [
	{ id: 'example1', title: 'Example1 (Class State)', component: <Example1 /> },
	{ id: 'example2', title: 'Example2 (useState 기본)', component: <Example2 /> },
	{ id: 'example3', title: 'Example3 (useState 객체)', component: <Example3 /> },
	{ id: 'example4', title: 'Example4 (Class 생명주기)', component: <Example4 /> },
	{ id: 'example5', title: 'Example5 (useEffect 생명주기)', component: <Example5 /> },
	{ id: 'window-width', title: 'useWindowWidth (Custom Hook)', component: <WindowWidthExample /> },
	{ id: 'example7', title: 'Example7 (useMemo 연산 최적화)', component: <Example7 /> },
	{ id: 'example11', title: 'Example11 (Context.Consumer)', component: <Example11 /> },
	{ id: 'example12', title: 'Example12 (Class contextType)', component: <Example12 /> },
	{ id: 'example13', title: 'Example13 (useContext Hook)', component: <Example13 /> },
];

function App() {
	const [page, setPage] = useState(() => window.location.hash.replace('#', ''));

	useEffect(() => {
		const onHashChange = () => {
			setPage(window.location.hash.replace('#', ''));
		};
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);

	const selected = examples.find((ex) => ex.id === page);

	if (selected) {
		return (
			<div className="container mt-3">
				<a href="#/">← 목록</a>
				<hr />
				<h3>{selected.title}</h3>
				<div className="mt-3">{selected.component}</div>
			</div>
		);
	}

	return (
		<div className="container mt-3">
			<h1>React Hooks 기초</h1>
			<ul>
				{examples.map((ex) => (
					<li key={ex.id}>
						<a href={`#${ex.id}`}>{ex.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
