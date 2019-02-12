"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = reducer;

var _reduxOidc = require("redux-oidc");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, action) {
  var type = action.type;
  var state = (0, _reduxOidc.reducer)(state, action);

  switch (type) {
    case _reduxOidc.LOADING_USER:
      // the loading process of a new user starts
      return _objectSpread({}, state, {
        status: 'LOADING'
      });

    case _reduxOidc.USER_EXPIRED:
      // current user is expired
      return _objectSpread({}, state, {
        status: 'USER_EXPIRED'
      });

    case _reduxOidc.REDIRECT_SUCCESS:
      // redirection callback succeeded in CallbackComponent.
      return _objectSpread({}, state, {
        status: 'USER_LOADED'
      });

    case _reduxOidc.USER_FOUND:
      // an existing user has been found during startup of the middleware.
      return _objectSpread({}, state, {
        status: 'USER_LOADED'
      });

    case _reduxOidc.SILENT_RENEW_ERROR:
      // silent renew fails.
      return _objectSpread({}, state, {
        status: 'SILENT_RENEW_ERROR'
      });

    case _reduxOidc.SESSION_TERMINATED:
      // the current session is terminated (user is logged out).
      return _objectSpread({}, state, {
        status: 'SESSION_TERMINATED'
      });

    case _reduxOidc.USER_SIGNED_OUT:
      // the user signs out.
      return _objectSpread({}, state, {
        status: 'USER_SIGNED_OUT'
      });

    case '@@INIT':
      return _objectSpread({}, state, {
        status: 'INIT'
      });

    default:
      return state;
  }
}