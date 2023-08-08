import React from 'react';

type ArrayWrapperProps = {
	children: JSX.Element[];
};

export default function ArrayWrapper({ children }: ArrayWrapperProps) {
	return (
		<div className='array-container' data-testid='array-container'>
			<section className='added-container'>
				<h5 className='left-bracket bracket' data-testid='left-bracket'>
					[
				</h5>
				<h5 className='right-bracket bracket' data-testid='right-bracket'>
					]
				</h5>
			</section>

			<section className='unadded-container'>{children}</section>
		</div>
	);
}
