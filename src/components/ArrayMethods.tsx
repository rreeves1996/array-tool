import React from 'react';

type ArrayMethodsProps = {
	handleMethod: (arg: string) => void;
};

export default function ArrayMethods({ handleMethod }: ArrayMethodsProps) {
	return (
		<section className='array-methods'>
			<div className='buttons-container'>
				<div className='method-button-container'>
					<button
						className='method-button'
						onClick={() => handleMethod('UNSHIFT')}
						data-testid='method-button'>
						<code>.unshift()</code>
					</button>

					<strong className='add-icon'>+</strong>
				</div>

				<div className='method-button-container'>
					<button
						className='method-button'
						onClick={() => handleMethod('PUSH')}
						data-testid='method-button'>
						<code>.push()</code>
					</button>

					<strong className='add-icon'>+</strong>
				</div>

				<div className='method-button-container'>
					<button
						className='method-button'
						onClick={() => handleMethod('SHIFT')}
						data-testid='method-button'>
						<code>.shift()</code>
					</button>

					<strong className='subtract-icon'>-</strong>
				</div>

				<div className='method-button-container'>
					<button
						className='method-button'
						onClick={() => handleMethod('POP')}
						data-testid='method-button'>
						<code>.pop()</code>
					</button>

					<strong className='subtract-icon'>-</strong>
				</div>
			</div>
			{/* <button>
				<code>
					.slice({` `}
					<select>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>{' '}
					,{' '}
					<select>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>{' '}
					)
				</code>
			</button> */}
		</section>
	);
}
