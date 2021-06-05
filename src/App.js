import { withRouter } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ location }) {
	return (
		<>
			<Switch location={location}>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		</>
	);
}

export default withRouter(App);
