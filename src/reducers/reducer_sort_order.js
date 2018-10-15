const initialState = [
	{name: name, temperatures: temperatures, pressures: pressures, humiditys: humiditys}
];

export default function(state = initalState, action){
	switch(action.type) {
		case "SORT_WEATHER":
			return state
				.map(weather => {
					return weather.name === action.payload.name
						? Object.assign({}, weather, {
							onClick: weather.onClick
						})
						: weather;

				})
				.slice()
				.sort((weather)) => {
					return weather.onClick;
				});
	}
	return state;
}