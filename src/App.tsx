import React from 'react';
import ArrayVisualizer from './components/ArrayVisualizer';
import Footer from './components/Footer';
import './assets/style/style.css';

function App() {
	return (
		<>
			<header>
				<h1>Array Tooler</h1>
				<h6>Vizualizer for array manipulation methods</h6>
			</header>

			<ArrayVisualizer />

			<Footer />
		</>
	);
}

export default App;
