import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArrayMethods from '../ArrayMethods';

afterEach(() => cleanup());

test('should render button elements', () => {
	const handleMethod = (method: string) => {
		return method;
	};
	render(<ArrayMethods handleMethod={handleMethod} />);
	const buttonElement = screen.getAllByTestId('method-button');
	expect(buttonElement).toBeInTheDocument;
});
