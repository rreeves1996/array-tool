import React, { useState, useEffect } from 'react';
import ArrayIcon from './ArrayIcon';
import ArrayMethods from './ArrayMethods';
import ArrayWrapper from './ArrayWrapper';

export type Icon = {
	ball: string;
	value: number;
	isAdded: boolean;
	position: number;
};

export default function ArrayVisualizer() {
	const [displayedArray, setDisplayedArray] = useState<number[]>([0, 1, 2]);
	const [unAddedIcons, setUnAddedIcons] = useState<number[]>([3, 4, 5, 6]);
	const [arrayIcons, setArrayIcons] = useState<Icon[]>([
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
			isAdded: true,
			position: 2,
		},
		{
			ball: 'bowlingball',
			value: 3,
			isAdded: false,
			position: 0,
		},
		{
			ball: 'cricketball',
			value: 4,
			isAdded: false,
			position: 1,
		},
		{
			ball: 'soccerball',
			value: 5,
			isAdded: false,
			position: 2,
		},
		{
			ball: 'tennisball',
			value: 6,
			isAdded: false,
			position: 3,
		},
	]);

	useEffect(() => {
		let newArrayIcons = [...arrayIcons];

		for (let i = 0; i < arrayIcons.length; i++) {
			if (displayedArray.includes(arrayIcons[i].value)) {
				newArrayIcons[i].isAdded = true;
				newArrayIcons[i].position = displayedArray.indexOf(arrayIcons[i].value);
			} else {
				newArrayIcons[i].isAdded = false;
				newArrayIcons[i].position = unAddedIcons.indexOf(arrayIcons[i].value);
			}
		}

		setArrayIcons((prevState) => newArrayIcons);
	}, [displayedArray]);

	useEffect(() => {
		let icons = document.querySelectorAll<HTMLElement>('.array-icon');

		for (let i = 0; i < arrayIcons.length; i++) {
			icons[i].style.transform = `translate(${arrayIcons[i].position * 5}em, ${
				arrayIcons[i].isAdded ? -5 : 0
			}rem)`;
		}
	}, [arrayIcons]);

	return (
		<section className='visualizer-container'>
			<ArrayWrapper displayedArray={displayedArray}>
				{arrayIcons.map((icon) => (
					<ArrayIcon ball={icon} />
				))}
			</ArrayWrapper>
			<ArrayMethods />
		</section>
	);
}
