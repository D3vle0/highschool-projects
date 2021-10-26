import "./App.css";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/404";
import NavLinks from "./pages/Links";
import Login from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			{/* <a href="/">Home</a> */}
			<NavLinks />
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/about" exact component={About}></Route>
				<Route path="/about?name=Devleo" exact component={About}></Route>
				<Route path="/profile" exact component={Profile}></Route>
				<Route path="/profile/:id" exact component={Profile}></Route>
				<Route path="/login" exact component={Login}></Route>
				<Route component={NotFound}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
