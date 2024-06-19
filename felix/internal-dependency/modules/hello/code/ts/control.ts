import config from '@playground/internal-dependency/config';

export /*bundle*/ function Message() {
	console.log('this is my config', config.package, config.environment);

	return `${config.package} - ${config.environment}`;
}
