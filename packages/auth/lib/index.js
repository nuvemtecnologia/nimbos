"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  authConfig: true,
  AuthProvider: true,
  userManager: true,
  reducer: true
};
exports.authConfig = authConfig;
Object.defineProperty(exports, "userManager", {
  enumerable: true,
  get: function get() {
    return _userManager.userManager;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.reducer;
  }
});
exports.AuthProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxOidc = require("redux-oidc");

var _userManager = require("./user-manager");

var _guard = _interopRequireDefault(require("./guard"));

var _reducer = require("./reducer");

var _callback = require("./callback");

Object.keys(_callback).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _callback[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function authConfig(store, config) {
  _userManager.config.current = _objectSpread({}, _userManager.config.current, config);
  _userManager.userManager.current = (0, _reduxOidc.createUserManager)(_userManager.config.current);
  (0, _reduxOidc.loadUser)(store, _userManager.userManager.current);
}

var AuthProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AuthProvider, _React$PureComponent);

  function AuthProvider() {
    _classCallCheck(this, AuthProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthProvider).apply(this, arguments));
  }

  _createClass(AuthProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          store = _this$props.store;
      return _react.default.createElement(_reduxOidc.OidcProvider, {
        store: store,
        userManager: _userManager.userManager.current
      }, _react.default.createElement(_guard.default, null, children));
    }
  }]);

  return AuthProvider;
}(_react.default.PureComponent);

exports.AuthProvider = AuthProvider;