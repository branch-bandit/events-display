import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import {Text, View } from 'native-base';
import actions from '../actions/index';
import EventItem from './EventItem';
import GreenSpinner from './GreenSpinner';

class EventList extends React.Component {
	componentDidMount() {
		this.props.apiGetEvents();
	}

	render() {
		return (
			<View>
				<Text style={{
					fontSize: 25,
					letterSpacing: 1,
					fontFamily: 'sans-serif',
					paddingTop: 30,
					paddingBottom: 15,
					textAlign: 'center',
					backgroundColor: '#bfff80',
				}}>
					Events in Prague
				</Text>
				{this.props.isLoading && (
					<GreenSpinner/>
				)}
				<FlatList
					data={this.props.listOfEvents}
					renderItem={EventItem}
					keyExtractor={item => item.id}
				/>
			</View>
		);
	}
}

EventList.propTypes = {
	listOfEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
	isLoading: PropTypes.bool.isRequired,
	apiGetEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	listOfEvents: state.EventsReducer.listOfEvents,
	isLoading: state.EventsReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
	apiGetEvents: () => dispatch(actions.apiGetEvents()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(EventList);
