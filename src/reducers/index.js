export default function boxReducers(state, action) {
	switch(action.type) {
		case 'TALLY_INCREMENT':
			return {...state, tally: state.tally+1};
		case 'TALLY_DECREMENT':
			return {...state, tally: state.tally-1};
		case 'TALLY_SET':
			return {...state, tally: action.tally};
		case 'TIMER_TOGGLE':
			return {...state, timer: state.timerRunning ? Date.now() - state.timer : Date.now(), timerRunning: !state.timerRunning};
		default:
			return state;
	}
}