import { DASHBOARD } from "../types";

export default (state = { reload: false }, action) => {
	switch (action.type) {
		case DASHBOARD.GET_DASHBOARD_DATA: {
			return {
				...state,
				data: action.payload ? action.payload : {},
			};
		}
		default:
			return state;
	}
};
