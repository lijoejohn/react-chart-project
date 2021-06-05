/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const Filter = ({ data, setFilterData, filterData }) => {
	const [filterDataSet, setFilterDataSet] = useState({});

	// Initial page load
	useEffect(() => {
		const filterDataSet = { status: [], type: [], priority: [] };
		data?.records?.length &&
			data.records.map((item) => {
				!filterDataSet.status.includes(item.status) && filterDataSet.status.push(item.status);
				!filterDataSet.type.includes(item.issue_type) && filterDataSet.type.push(item.issue_type);
				!filterDataSet.priority.includes(item.priority) && filterDataSet.priority.push(item.priority);
			});
		setFilterDataSet(filterDataSet);
	}, []);

	const filterClick = (type, e, value) => {
		const filterDataCopy = { ...filterData };
		if (e.target.checked) {
			filterData[type].push(value);
		} else {
			const index = filterData[type].indexOf(value);
			if (index !== -1) {
				filterData[type].splice(index, 1);
			}
		}
		setFilterData(filterDataCopy);
	};

	return (
		<Row className="content-area">
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Text className="text-muted">Select Status</Form.Text>
					{filterDataSet.status?.map((item, index) => {
						return (
							<Form.Check
								key={index}
								type="checkbox"
								label={`${item}`}
								onClick={(e) => filterClick("status", e, item)}
							/>
						);
					})}
				</Form.Group>
			</Col>
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Text className="text-muted">Select Issue Type</Form.Text>
					{filterDataSet.type?.map((item, index) => {
						return (
							<Form.Check
								key={index}
								type="checkbox"
								label={`${item}`}
								onClick={(e) => filterClick("type", e, item)}
							/>
						);
					})}
				</Form.Group>
			</Col>
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Text className="text-muted">Select Issue Priority</Form.Text>
					{filterDataSet.priority?.map((item, index) => {
						return (
							<Form.Check
								key={index}
								type="checkbox"
								label={`${item}`}
								onClick={(e) => filterClick("priority", e, item)}
							/>
						);
					})}
				</Form.Group>
			</Col>
		</Row>
	);
};
export default Filter;
