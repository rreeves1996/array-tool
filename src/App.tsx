import React from 'react';
import ArrayVisualizer from './components/ArrayVisualizer';
import Footer from './components/Footer';
import './assets/style/style.css';

function App() {
	return (
		<div className='app-wrapper' data-testid='app-wrapper'>
			<main>
				<section className='app-container'>
					<header>
						<h1>
							.array<strong>Tool</strong>();
						</h1>
					</header>

					<ArrayVisualizer />
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default App;
