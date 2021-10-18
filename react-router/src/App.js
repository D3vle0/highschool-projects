import "./App.css";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/about" exact component={About}></Route>
				<Route path="/profile" exact component={Profile}></Route>
				<Route path="/profile/:id" exact component={Profile}></Route>
				<Route component={NotFound}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
