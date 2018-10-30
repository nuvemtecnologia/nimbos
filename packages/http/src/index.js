import axios from 'axios';

const _instances = new Map();

_instances.set('default', axios);

function register(config, name = 'default') {
	const instance = axios.create(config);

	_instances.set(name, instance);
}

function create(name = 'default') {
	return _instances.get(name);
}

export const httpFactory = {
	register,
	create
};
