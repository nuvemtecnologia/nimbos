import axios from 'axios';

var _instances = new Map();

_instances.set('default', axios);

function register(config) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var instance = axios.create(config);

  _instances.set(name, instance);
}

function create() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  return _instances.get(name);
}

export var httpFactory = {
  register: register,
  create: create
};