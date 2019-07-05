import axios from 'axios';

const apiGetEvents = () => {
	return (dispatch) => {
		dispatch({ type: 'START_LOADING' });

		axios.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.within=25mi&location.latitude=50.0755&location.longitude=14.4378&start_date.keyword=this_month&token=HTQ63224SO55MFDGYOWI')
			.then(response => response.data.events)
			.then(payload => dispatch({ type: 'SET_EVENTS', payload }));
	};
};

export default { apiGetEvents };
