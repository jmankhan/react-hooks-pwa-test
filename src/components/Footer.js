import React, {useState, Component} from 'react';
import Results from './Results';

const Footer = (props) => {
	const [results, showResults] = useState(null,[]);
	const [settings, showSettings] = useState(null,[]);

	return(
		<div>
			<button>Settings</button>
			<button onClick={() => showResults(!results)}>Results</button>

			{results && <Results data={props.data} /> }
		</div>
	)
}

export default Footer;