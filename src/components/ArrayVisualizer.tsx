import React, { useState } from 'react';
import ArrayIcon from './ArrayIcon';
import ArrayMethods from './ArrayMethods';
import ArrayWrapper from './ArrayWrapper';

type Icon = {
	ball: 'string';
	value: number;
	isAdded: boolean;
};

export default function ArrayVisualizer() {
	const [displayedArray, setDisplayedArray] = useState<number[]>([]);
	const [arrayIcons, setArrayIcons] = useState([
		{
			ball: 'football',
			value: 0,
			isAdded: true,
		},
		{
			ball: 'baseball',
			value: 1,
			isAdded: true,
		},
		{
			ball: 'basketball',
			value: 2,
			isAdded: true,
		},
		{
			ball: 'bowlingball',
			value: 3,
			isAdded: false,
		},
		{
			ball: 'cricketball',
			value: 4,
			isAdded: false,
		},
		{
			ball: 'soccerball',
			value: 5,
			isAdded: false,
		},
		{
			ball: 'tennisball',
			value: 6,
			isAdded: false,
		},
	]);

	return (
		<section className='visualizer-container'>
			<ArrayWrapper>
				{arrayIcons.map((icon) => (
					<ArrayIcon ball={icon.ball} setDisplayedArray={setDisplayedArray} />
				))}
			</ArrayWrapper>
			<ArrayMethods />
		</section>
	);
}
