import React from 'react';
import ArrayVisualizer from './components/ArrayVisualizer';
import Footer from './components/Footer';
import './assets/style/style.css';

function App() {
	return (
		<div className='app-wrapper'>
			<main>
				<header>
					<h1>
						.array<strong>Tool</strong>();
					</h1>
				</header>

				<ArrayVisualizer />
			</main>

			<Footer />
		</div>
	);
}

export default App;
