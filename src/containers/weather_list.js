import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from '../components/chart';
import GoogleMaps from'../components/google_maps';
import { sortWeather } from "../actions/index";

class WeatherList extends Component {

	renderWeather(cityData){
		const name = cityData.city.name;

		const{ lon, lat }= cityData.city.coord;

		const temperatures = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humiditys = cityData.list.map(weather => weather.main.humidity);
	

		return (
			<li
				onCLick={() => this.props.sortWeather(weather)}
				key={cityData.weather}
				className={name}
			>

			<tr key={ name } >
				<td><GoogleMaps lon={lon} lat={lat}/> </td>
				<td>
					<Chart data={temperatures} color="red" units=" Kelvin"/>
				</td>
				<td>
					<Chart data={pressures} color="blue" units=" hPa"/>
				</td>
				<td>
					<Chart data={humiditys} color="green" units=" %"/>
				</td>
			</tr>

			
	}


	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City </th>
						<th>Temperature (Kelvin) </th>
						<th>Pressure (hPa) </th>
						<th>Humidity (%) </th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

// ES6 syntax for the following
// function mapStateToProps(state){
//  return { weather:state.weather };
// }

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);