import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';
import Footer from '../Footer';

afterEach(() => cleanup());

test('should render app wrapper', () => {
	render(<App />);
	const appWrapperElement = screen.getByTestId('app-wrapper');
	expect(appWrapperElement).toBeInTheDocument;
});

test('should render footer', () => {
	render(<App />);
	const footerElement = screen.getByTestId('footer');
	expect(footerElement).toBeInTheDocument;
});
