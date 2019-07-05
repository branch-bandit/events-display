import React from 'react';
import PropTypes from 'prop-types';
import { truncate } from 'lodash';
import { Button, Linking, Dimensions } from 'react-native';
import {
	Text, ListItem, Icon, View, Accordion,
} from 'native-base';


const EventItem = ({ item }) => {
	// console.log(item);

	const truncatedEventName = truncate(
		item.name.text,
		{
			length: 60,
			separator: /,?\.* +/,
		},
	);

	const truncatedDescription = truncate(
		item.description.text,
		{
			length: 240,
			separator: /,?\.* +/,
		},
	);

	const eventDateFormatted = {
		startDate: item.start.local.slice(0, 10),
		startHour: item.start.local.slice(11, 16),
	};

	const itemWidth = Dimensions.get('window').width - 20;

	return (
		<ListItem itemDivider key={item.name.text} style={{ alignSelf: 'center' }}>
			<Accordion
				style={{
					fontFamily: 'sans-serif',
					width: itemWidth,
					fontSize: 20,
					backgroundColor: '#A9DAB2',
					marginVertical: -5,
					marginLeft: -5,
				}}
				dataArray={[item]}
				renderHeader={(item, expanded) => (
					<View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
						<Text style={{ fontWeight: 'bold', paddingBottom: 5, letterSpacing: 2 }}>
							{truncatedEventName}
						</Text>
						<Text style={{ fontStyle: 'italic', paddingBottom: 5, letterSpacing: 2 }}>
							{eventDateFormatted.startDate}
							{' at '}
							{eventDateFormatted.startHour}
						</Text>
						{expanded
							? <Icon style={{ width: itemWidth - 40, textAlign: 'center' }} name="arrow-up" />
							: <Icon style={{ width: itemWidth - 40, textAlign: 'center' }} name="arrow-down" />
						}
					</View>
				)}
				renderContent={() => (
					<View style={{
						paddingHorizontal: 20, paddingVertical: 8, width: itemWidth, backgroundColor: '#e6ffcc',
					}}
					>
						<Text style={{ fontStyle: 'italic', paddingBottom: 12, paddingTop: 8 }}>
							{truncatedDescription}
						</Text>
						<Button title="Go to website" onPress={() => { Linking.openURL(item.url); }} color="#99cc00" />
					</View>
				)}
				icon="add"
				expandedIcon="remove"
			/>
		</ListItem>
	);
};

EventItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default EventItem;
