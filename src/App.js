import logo from "./logo.svg";
import "./App.css";
// import "./components/Header/Header.css";
// import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";
// import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			<h1>Hello Rest Countries</h1>
			{/* <Loadcountries></Loadcountries> */}
			{/* <Header></Header> */}
			<Countries></Countries>
		</div>
	);
}

// function Loadcountries() {
// 	const [countries, setCountries] = useState([]);
// 	useEffect(() => {
// 		fetch("https://restcountries.com/v3.1/all")
// 			.then((response) => response.json())
// 			.then((data) => setCountries(data));
// 	}, []);
// 	return (
// 		<div>
// 			<h2>Visiting Rest Countries</h2>
// 			<p>Available countries: {countries.length}</p>
// 			{countries.map((country) => (
// 				<Country
// 					name={country.name.common}
// 					population={country.population}
// 				></Country>
// 			))}
// 		</div>
// 	);
// }

// function Country(props) {
// 	return (
// 		<div>
// 			<h3>Name: {props.name}</h3>
// 			<p>Population: {props.population}</p>
// 		</div>
// 	);
// }
export default App;
