import React from 'react';
import { Icon } from './ArrayVisualizer';
import {
	BiBall,
	BiBaseball,
	BiBasketball,
	BiBowlingBall,
	BiCricketBall,
	BiFootball,
	BiTennisBall,
} from 'react-icons/bi';

type ArrayIconProps = {
	ball: Icon;
};

export default function ArrayIcon({ ball }: ArrayIconProps) {
	function renderIcon() {
		switch (ball.value) {
			case 0: {
				return <BiBall />;
			}
			case 1: {
				return <BiBaseball />;
			}
			case 2: {
				return <BiBasketball />;
			}
			case 3: {
				return <BiBowlingBall />;
			}
			case 4: {
				return <BiCricketBall />;
			}
			case 5: {
				return <BiFootball />;
			}
			case 6: {
				return <BiTennisBall />;
			}
			default: {
				return <p>Error!</p>;
			}
		}
	}

	return (
		<div className='array-icon'>
			<h5>{renderIcon()}</h5>
			<p>{ball.value}</p>
		</div>
	);
}
