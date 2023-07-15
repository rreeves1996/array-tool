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

export default function ArrayVisualizer() {
	const [arrayIcons, setArrayIcons] = useState<Icon[]>([...ARRAY_ICONS]);
	const [displayedArrayIcons, setDisplayedArrayIcons] = useState<number[]>([
		0, 1,
	]);
	const [unAddedIcons, setUnAddedIcons] = useState<number[]>([2, 3, 4]);

	useEffect(() => {
		let icons = document.querySelectorAll<HTMLElement>('.array-icon');
		let bracket = document.querySelector<HTMLElement>('.right-bracket');

		// Iterate through icons and space them based on their position and the "isAdded" property
		for (let i = 0; i < arrayIcons.length; i++) {
			icons[i].style.transform = `translate(${
				arrayIcons[i].isAdded
					? arrayIcons[i].position * 4.1 + 1.8
					: arrayIcons[i].position * 4.1
			}rem, ${arrayIcons[i].isAdded ? -6 : 1}rem)`;
		}

		// Length of displayed array + margin
		bracket!.style.transform = `translateX(${
			displayedArrayIcons.length * 4.08
		}rem)`;
	}, [arrayIcons]);

	// Here we make sure there is an icon available to perform the selected method on
	const handleMethod = (method: string) => {
		switch (method) {
			case 'PUSH': {
				if (unAddedIcons[0] !== undefined) handlePush();
				break;
			}
			case 'POP': {
				if (displayedArrayIcons[0] !== undefined) handlePop();
				break;
			}
			case 'UNSHIFT': {
				if (unAddedIcons[0] !== undefined) handleUnshift();
				break;
			}
			case 'SHIFT': {
				if (displayedArrayIcons[0] !== undefined) handleShift();
				break;
			}
			default: {
				break;
			}
		}
	};

	const handlePush = () => {
		let newDisplayedArrayIcons = [...displayedArrayIcons];
		let newUnAddedIcons = [...unAddedIcons];
		let newArrayIcons = [...arrayIcons];

		newDisplayedArrayIcons.push(newUnAddedIcons[0]);
		newUnAddedIcons.shift();

		// Modify array of icons so the icon has "isAdded" as true and position corrected
		newArrayIcons.filter((icon) => {
			if (icon.value === unAddedIcons[0]) {
				icon.isAdded = true;
				icon.position = newDisplayedArrayIcons.length - 1;
			} else if (icon.isAdded === false) {
				// For the other icons in the array it was taken from, we shift them back one position to fill the space of the removed icon
				icon.position = newUnAddedIcons.indexOf(icon.value);
			}
		});

		setDisplayedArrayIcons((prevState) => newDisplayedArrayIcons);
		setUnAddedIcons((prevState) => newUnAddedIcons);
		setArrayIcons((prevState) => newArrayIcons);
	};

	const handlePop = () => {
		let newDisplayedArrayIcons = [...displayedArrayIcons];
		let newUnAddedIcons = [...unAddedIcons];
		let newArrayIcons = [...arrayIcons];

		newUnAddedIcons.push(
			newDisplayedArrayIcons[newDisplayedArrayIcons.length - 1]
		);
		newDisplayedArrayIcons.pop();

		// Modify array of icons so the icon has "isAdded" as false and position corrected
		newArrayIcons.filter((icon) => {
			if (icon.value === newUnAddedIcons[newUnAddedIcons.length - 1]) {
				icon.isAdded = false;
				icon.position = newUnAddedIcons.length - 1;
			} else if (icon.isAdded === false) {
				// For the other icons in the array it was taken from, we shift them forward one position to fill the space of the removed icon
				icon.position = newUnAddedIcons.indexOf(icon.value);
			}
		});

		setDisplayedArrayIcons((prevState) => newDisplayedArrayIcons);
		setUnAddedIcons((prevState) => newUnAddedIcons);
		setArrayIcons((prevState) => newArrayIcons);
	};

	const handleUnshift = () => {
		let newDisplayedArrayIcons = [...displayedArrayIcons];
		let newUnAddedIcons = [...unAddedIcons];
		let newArrayIcons = [...arrayIcons];

		newDisplayedArrayIcons.unshift(unAddedIcons[0]);
		newUnAddedIcons.shift();

		// Modify array of icons so the icon has "isAdded" as true and position corrected to be positioned at the beginning of the array
		newArrayIcons.filter((icon) => {
			if (icon.value === unAddedIcons[0]) {
				icon.isAdded = true;
				icon.position = 0;
			} else if (icon.isAdded === true) {
				// For the other icons in the array it was added to, move them forward one position
				icon.position++;
			} else if (icon.isAdded === false) {
				// For the other icons in the array it was taken from, we shift them back one position to fill the space of the removed icon
				icon.position = newUnAddedIcons.indexOf(icon.value);
			}
		});

		setDisplayedArrayIcons((prevState) => newDisplayedArrayIcons);
		setUnAddedIcons((prevState) => newUnAddedIcons);
		setArrayIcons((prevState) => newArrayIcons);
	};

	const handleShift = () => {
		let newDisplayedArrayIcons = [...displayedArrayIcons];
		let newUnAddedIcons = [...unAddedIcons];
		let newArrayIcons = [...arrayIcons];

		newUnAddedIcons.push(newDisplayedArrayIcons[0]);
		newDisplayedArrayIcons.shift();

		// Modify array of icons so the icon has "isAdded" as true and position corrected to be positioned at the end of the array
		newArrayIcons.filter((icon) => {
			if (icon.value === newUnAddedIcons[newUnAddedIcons.length - 1]) {
				icon.isAdded = false;
				icon.position = newUnAddedIcons.length - 1;
			} else if (icon.isAdded === true) {
				// For the other icons in the array it was removed from, move them back one position
				icon.position--;
			} else if (icon.isAdded === false) {
				// For the other icons in the array it was added to, we shift them forward one position to fill the space of the removed icon
				icon.position = newUnAddedIcons.indexOf(icon.value);
			}
		});

		setDisplayedArrayIcons((prevState) => newDisplayedArrayIcons);
		setUnAddedIcons((prevState) => newUnAddedIcons);
		setArrayIcons((prevState) => newArrayIcons);
	};

	// const handleSplice = () => {};

	return (
		<section className='visualizer-container'>
			<ArrayWrapper>
				{arrayIcons.map((icon) => (
					<ArrayIcon ball={icon} />
				))}
			</ArrayWrapper>
			<ArrayMethods handleMethod={handleMethod} />
		</section>
	);
}
