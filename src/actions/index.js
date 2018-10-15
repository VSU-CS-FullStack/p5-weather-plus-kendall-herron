import axios from 'axios';

const API_KEY = "af34bf3c8546fcd5bf929adeb4b3c0cb";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url =`${ROOT_URL}&q=${city},us`;

	// axios.get(url) returns a promise
	const request = axios.get(url);

	// console.log('Request (pre middleware):', request);

	return {        
		type: FETCH_WEATHER,        
		payload: request
	}
}

export const SORT_WEATHER = 'SORT_WEATHER';

export function sortWeather(city){
	return{
		type: "SORT_WEATHER",
		payload: name
	}
}