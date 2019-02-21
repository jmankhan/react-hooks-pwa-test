import React, {useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TrackerLayout from './components/TrackerLayout';

const App = () => {
	const [data, setData] = useState(null, [])

	const updateData = (data) => {
		setData(data);
	}

	return(
		<div className="App">
			<Header />
			<TrackerLayout updateData={updateData}/>
			<Footer data={data} />
		</div>
	);
}
export default App;
