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
	const [displayedArrayIcons, setDisplayedArrayIcons] = useState<number[]>([
		0, 1, 2,
	]);
	const [unAddedIcons, setUnAddedIcons] = useState<number[]>([3, 4, 5, 6]);

	useEffect(() => {
		let icons = document.querySelectorAll<HTMLElement>('.array-icon');
		let bracket = document.querySelector<HTMLElement>('.right-bracket');

		for (let i = 0; i < arrayIcons.length; i++) {
			icons[i].style.transform = `translate(${
				arrayIcons[i].isAdded
					? arrayIcons[i].position * 4.1 + 1.8
					: arrayIcons[i].position * 4.1
			}rem, ${arrayIcons[i].isAdded ? -5 : 1}rem)`;

			console.log(arrayIcons[i]);
		}

		// Length of displayed array + margin
		bracket!.style.transform = `translateX(${
			displayedArrayIcons.length * 4
		}rem)`;
	}, [arrayIcons]);

	const handleMethod = (method: string) => {
		switch (method) {
			case 'PUSH': {
				let newDisplayedArrayIcons = [...displayedArrayIcons];
				let newUnAddedIcons = [...unAddedIcons];
				let newArrayIcons = [...arrayIcons];

				newDisplayedArrayIcons.push(unAddedIcons[0]);
				newUnAddedIcons.shift();
				console.log(newUnAddedIcons);

				newArrayIcons.filter((icon) => {
					if (icon.value === unAddedIcons[0]) {
						icon.isAdded = true;
						icon.position = newDisplayedArrayIcons.length - 1;
					} else if (icon.isAdded === false) {
						console.log('hello');
						icon.position = newUnAddedIcons.indexOf(icon.value);
						// console.log(icon.position);
					}
				});

				setDisplayedArrayIcons((prevState) => newDisplayedArrayIcons);
				console.log('Added: ' + newDisplayedArrayIcons);
				setUnAddedIcons((prevState) => newUnAddedIcons);
				console.log('UnAdded: ' + newUnAddedIcons);
				setArrayIcons((prevState) => newArrayIcons);
				console.log('Array: ' + newArrayIcons);
			}
			case 'POP': {
			}
			case 'SHIFT': {
			}
			case 'UNSHIFT': {
			}
		}
	};

	return (
		<section className='visualizer-container'>
			<ArrayWrapper displayedArrayIcons={displayedArrayIcons}>
				{arrayIcons.map((icon) => (
					<ArrayIcon ball={icon} />
				))}
			</ArrayWrapper>
			<ArrayMethods handleMethod={handleMethod} />
		</section>
	);
}
