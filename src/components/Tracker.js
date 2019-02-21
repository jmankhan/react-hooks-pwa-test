import React, {useReducer, useEffect, Component} from 'react';
import style from './Tracker.css';
import boxReducers from '../reducers';

const Tracker = ({data, onChange}) => {
	const [state, dispatch] = useReducer(boxReducers, data);

	useEffect(() => {
		onChange(state);
	}, [state])
	
	const handleClick = () => {
		if(data.type === 'timer') {
			//handle timer
			dispatch({type: 'TIMER_TOGGLE'})
		} else  {
			//handle tally
			dispatch({type: 'TALLY_INCREMENT'});
		}

	}

	const formatTimer = (s) => {
		var ms = s % 1000;
		s = (s - ms) / 1000;
		var secs = s % 60;
		s = (s - secs) / 60;
		var mins = s % 60;
		var hrs = (s - mins) / 60;

		return ('0' + mins).slice(-2) + ':' + ("0" + secs).slice(-2);
	}

	return(
		<div className="box" onClick={handleClick}>
			<p>{data.label}</p>
			<p>{data.type === 'timer' ? (state.timerRunning ? 'Running..' : formatTimer(state.timer)) : state.tally}</p>
		</div>
	)
}

export default Tracker;