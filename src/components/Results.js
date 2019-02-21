import React from 'react';

const Results = (props) => {
	
	return (
		<div>
			{props.data && props.data.map(data => {
				return <ul>
					<li>{data.label}</li>
					<li>{data.type === 'timer' ? data.timer : data.tally}</li>
				</ul>
			})}
		</div>
	)
}

export default Results;