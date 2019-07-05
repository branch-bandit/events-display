import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import EventList from './components/EventList';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<EventList
					eventList={this.props.events}
				/>
			</Provider>
		);
	}
}

export default App;
