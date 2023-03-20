import React from 'react';

type ArrayMethodsProps = {
	handleMethod: (arg: string) => void;
};

export default function ArrayMethods({ handleMethod }: ArrayMethodsProps) {
	return (
		<section>
			<p>Methods:</p>

			<div className='button-container'>
				<button onClick={() => handleMethod('PUSH')}>
					<code>.push()</code>
				</button>

				<button onClick={() => handleMethod('POP')}>
					<code>.pop()</code>
				</button>

				<button onClick={() => handleMethod('UNSHIFT')}>
					<code>.unshift()</code>
				</button>

				<button onClick={() => handleMethod('SHIFT')}>
					<code>.shift()</code>
				</button>
			</div>
			<button>
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
			</button>
		</section>
	);
}
