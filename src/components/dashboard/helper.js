import _ from "lodash";
export const processChartData = ({ records, filterData }) => {
	const result = [];
	records.forEach((item) => {
		let skip = false;
		if (filterData.status.length && filterData.status.includes(item.status) === false) {
			skip = true;
		}
		if (filterData.type.length && filterData.type.includes(item.issue_type) === false) {
			skip = true;
		}
		if (filterData.priority.length && filterData.priority.includes(item.priority) === false) {
			skip = true;
		}
		if (!skip) {
			const index = _.findIndex(result, function (o) {
				return o.assignee == item.assignee;
			});
			if (index >= 0) {
				result[index]["count"] += 1;
			} else {
				result.push({ assignee: item.assignee, count: 1 });
			}
		}
	});
	const mapData = [["Assignee", "Tickets"]];
	result.forEach((item) => {
		mapData.push([item.assignee, Number(item.count)]);
	});
	return mapData;
};
