import React from "react";

const Loader = () => {
	return (
		<>
			<div className="overlay show"></div>
			<div className="spanner show">
				<div className="loader"></div>
				<p>Please be patient.</p>
			</div>
		</>
	);
};
export default Loader;
