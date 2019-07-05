const initialState = {
	isLoading: false,
	listOfEvents: [],
};

const EventsReducer = (state = initialState, action) => {
	// console.log(action);

	switch (action.type) {
	case 'START_LOADING':
		return {
			...state,
			isLoading: true,
		};
	case 'SET_EVENTS':
		return {
			...state,
			listOfEvents: action.payload,
			isLoading: false,
		};
	default:
		return state;
	}
};

export default EventsReducer;
