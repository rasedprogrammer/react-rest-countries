import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			{/* <h2>Countries Is Other Files</h2> */}
			<p>Countries: {countries.length}</p>
			<div className="country-container">
				{countries.map((country) => (
					<Country country={country} key={country.cca3}></Country>
					// console.log(country);
				))}
			</div>
		</div>
	);
};

// name={country.name.common}
// population={country.population}
// region={country.region}
// area={country.area}

export default Countries;
