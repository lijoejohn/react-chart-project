import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "react-google-charts";

import { getDashboard } from "../../store/actions";

import Header from "./header";
import Filter from "./filter";
import Loader from "../sharedComponents/loader";
import { processChartData } from "./helper";
import "./dashboard.scss";

const Dashboard = () => {
	const dispatch = useDispatch();
	const [chartData, setChartData] = useState([]);
	const [filterData, setFilterData] = useState({ status: [], type: [], priority: [] });

	const { data } = useSelector((state) => state.Dashboard);

	// Initial page load
	useEffect(() => {
		dispatch(getDashboard());
	}, []);

	useEffect(async () => {
		const chartData = data?.records?.length ? await processChartData({ ...data, filterData }) : [];
		setChartData(chartData);
	}, [data, filterData]);

	return (
		<Container className="dashboard-wrap">
			<Header />
			{data?.records?.length && <Filter data={data} setFilterData={setFilterData} filterData={filterData} />}
			<Row className="content-area">
				<Col className="box" lg={12} md={12} sm={12} xs={12}>
					{chartData?.length > 1 ? (
						<Chart
							width={"100%"}
							height={"500px"}
							chartType="ColumnChart"
							loader={<div>Loading Chart</div>}
							data={chartData}
							options={{
								// Material design options
								chart: { title: "" },
								legend: { position: "none" },
								vAxis: { format: "0" },
								chartArea: { width: "80%", height: "60%" },
							}}
							// For tests
							rootProps={{ "data-testid": "2" }}
						/>
					) : null}
				</Col>
			</Row>
			{!chartData?.length ? <Loader /> : null}
		</Container>
	);
};
export default Dashboard;
