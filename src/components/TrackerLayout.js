import React, {useEffect, useState, Component} from 'react';
import Tracker from './Tracker';

const TrackerLayout = (props) => {
	const [trackers, setTrackers] = useState(null, []);

	useEffect(() => {
		let data = window.localStorage.getItem('key-' + new Date());
		if(!data) {
			data = [
				{id: 1, label: 'Behavior 1', type: 'timer', timer: 0, tally: 0, timerRunning: false},
				{id: 2, label: 'Behavior 2', type: 'tally', timer: 0, tally: 0, timerRunning: false},
			]
		}
		setTrackers(data);
	})

	const onChange = (changedTracker) => {
		const i = trackers.findIndex(tracker => tracker.id === changedTracker.id);
		trackers[i] = changedTracker;
		setTrackers(trackers);
		props.updateData(trackers)
	}

	return(
		<div>
			{trackers && trackers.map(data => <Tracker key={data.id} data={data} onChange={onChange}/>)}
		</div>
	)
}

export default TrackerLayout;