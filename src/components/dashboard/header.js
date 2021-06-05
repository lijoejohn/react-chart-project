import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
	return (
		<Container className="dashboard-wrap">
			<Row className="content-area">
				<Col className="box" lg={12} md={12} sm={12} xs={12}>
					<span className="heading">Jira Summary</span>
				</Col>
			</Row>
		</Container>
	);
};
export default Header;
