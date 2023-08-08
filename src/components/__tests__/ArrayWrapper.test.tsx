import { render, screen, cleanup } from '@testing-library/react';
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

test('should render array container and brackets', () => {
	render(
		<ArrayWrapper>
			{ARRAY_ICONS.map((icon, index) => (
				<ArrayIcon key={index} ball={icon} />
			))}
		</ArrayWrapper>
	);
	const appWrapperElement = screen.getByTestId('array-container');
	expect(appWrapperElement).toBeInTheDocument;
	const bracketElements = screen.getAllByTestId('bracket');
	expect(bracketElements).toBeInTheDocument;
});
