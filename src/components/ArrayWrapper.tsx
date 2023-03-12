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
		<div>
			<section className='added-container'>
				<h5 className='left-bracket'>[</h5>
				<h5 className='right-bracket'>]</h5>
			</section>
			<section className='unadded-container'>{children}</section>
		</div>
	);
}
