import React, {Component} from 'react';

const Header = () => {
	return(
		<div>
			<h1>{new Date().toLocaleDateString()}</h1>
		</div>
	)
}

export default Header;