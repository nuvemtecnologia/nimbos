"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpFactory = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _instances = new Map();

_instances.set('default', _axios.default);

function register(config) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

  var instance = _axios.default.create(config);

  _instances.set(name, instance);
}

function create() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  return _instances.get(name);
}

var httpFactory = {
  register: register,
  create: create
};
exports.httpFactory = httpFactory;