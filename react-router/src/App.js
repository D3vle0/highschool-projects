import "./App.css";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<Route path="" component={Home}></Route>
			<Route path="/about" component={About}></Route>
			<Route path="/profile" component={Profile}></Route>
		</BrowserRouter>
	);
}

export default App;
