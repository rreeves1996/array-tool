import React, { ReactElement } from 'react';

type ArrayWrapperProps = {
	children: JSX.Element[];
	displayedArrayIcons: number[];
};

export default function ArrayWrapper({
	children,
	displayedArrayIcons,
}: ArrayWrapperProps) {
	return (
		<div className='array-container'>
			<section className='added-container'>
				<h5 className='left-bracket bracket'>[</h5>
				<h5 className='right-bracket bracket'>]</h5>
			</section>

			<section className='unadded-container'>{children}</section>
		</div>
	);
}
