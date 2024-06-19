import * as React from 'react';
import config from '@playground/web-build/config';
import { Message } from '@playground/internal-dependency/hello';

console.log('config', config, config.package, config.environment);
console.log('Message', Message);

export /*bundle*/
function View(): JSX.Element {
	console.log('Message jsx', Message());
	return (
		<div className='page__container'>
			<h1>
				My first page using BeyondJS with <span className='beyond'>React</span>!
			</h1>
			{Message()}
		</div>
	);
}
