import React from "react";
import "./Country.css";

const Country = (props) => {
	// console.log(props.country);
	const { area, region, population, name, flags } = props.country;
	return (
		<div className="country">
			{/* <h1>Country Js Showing</h1> */}
			<img src={flags.png} alt="" />
			<h3>Name: {name.common}</h3>
			<p>Population: {population}</p>
			<p>
				<small>Area: {area}</small>
			</p>
			<p>
				<small>Region: {region}</small>
			</p>
		</div>
	);
};

export default Country;
