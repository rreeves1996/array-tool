import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import ArrayWrapper from '../ArrayWrapper';
import ArrayIcon from '../ArrayIcon';

const ARRAY_ICONS = [
	{
		ball: 'football',
		value: 0,
		isAdded: true,
		position: 0,
	},
	{
		ball: 'baseball',
		value: 1,
		isAdded: true,
		position: 1,
	},
	{
		ball: 'basketball',
		value: 2,
		isAdded: false,
		position: 0,
	},
	{
		ball: 'bowlingball',
		value: 3,
		isAdded: false,
		position: 1,
	},

	{
		ball: 'soccerball',
		value: 4,
		isAdded: false,
		position: 2,
	},
];

afterEach(() => cleanup());

test('should render array container', () => {
	render(
		<ArrayWrapper>
			{ARRAY_ICONS.map((icon, index) => (
				<ArrayIcon key={index} ball={icon} />
			))}
		</ArrayWrapper>
	);
	const appWrapperElement = screen.getByTestId('array-container');
	expect(appWrapperElement).toBeInTheDocument;
});

test('should render brackets', () => {
	render(
		<ArrayWrapper>
			{ARRAY_ICONS.map((icon, index) => (
				<ArrayIcon key={index} ball={icon} />
			))}
		</ArrayWrapper>
	);
	const leftBracketElement = screen.getByTestId('left-bracket');
	const rightBracketElement = screen.getByTestId('right-bracket');
	expect(leftBracketElement && rightBracketElement).toBeInTheDocument;
	expect(leftBracketElement).toHaveTextContent('[');
	expect(rightBracketElement).toHaveTextContent(']');
});
