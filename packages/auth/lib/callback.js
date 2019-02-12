"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Callback = Callback;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxOidc = require("redux-oidc");

var _userManager = require("./user-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Callback(_ref) {
  var loginMessage = _ref.loginMessage,
      redirect = _ref.redirect;
  return _react.default.createElement(_reduxOidc.CallbackComponent, {
    userManager: _userManager.userManager.current,
    successCallback: function successCallback(response) {
      var redirectUri = '/';

      if (response && 'state' in response && 'redirectUri' in response.state) {
        redirectUri = response.state.redirectUri;
      }

      redirect(redirectUri);
    },
    errorCallback: function errorCallback(error) {
      redirect('/error');
    }
  }, _react.default.createElement("div", null, loginMessage ? loginMessage : 'Entrando...'));
}

var _default = Callback;
exports.default = _default;