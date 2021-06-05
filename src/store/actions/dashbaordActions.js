import { DASHBOARD } from "../types";
import data from "../../data/assignment-sample-data.js";
export const getDashboard = () => {
	return {
		type: DASHBOARD.GET_DASHBOARD_DATA,
		payload: data,
	};
};
