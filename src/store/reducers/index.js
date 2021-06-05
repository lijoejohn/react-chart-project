import { combineReducers } from "redux";

import Dashboard from "./dashboardReducer";

const allReducers = combineReducers({
	Dashboard,
});

const rootReducer = (state, action) => {
	return allReducers(state, action);
};

export default rootReducer;
