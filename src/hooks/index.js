import React, { useState, useEffect } from 'react';

function useBoxes(key) {
	const [boxes, setBoxes] = useState(null, []);
	var data = window.localStorage.getItem(key);
	if(!data) {
		data = 
		[
			{id: 1, label: 'Behavior 1', timer: 0, tally: 0, timerRunning: false, type: 'tally'},
			{id: 2, label: 'Behavior 2', timer: 0, tally: 0, timerRunning: false, type: 'timer'}
		];

	}
	setBoxes(data)

	return [boxes, setBoxes];
}

export default useBoxes;