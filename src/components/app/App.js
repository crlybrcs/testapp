import React from 'react';
import './App.css';
import Navbar from '../Nav';
import MainContainer from '../MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<MainContainer />
		</div>
	);
}

export default App;
