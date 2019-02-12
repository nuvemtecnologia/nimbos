"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _userManager = require("./user-manager");

var goingToLogin = false;
var isSilentRenew = false;

function AuthGuard(_ref) {
  var authStatus = _ref.authStatus,
      children = _ref.children,
      loading = _ref.loading;

  if (authStatus == 'USER_LOADED' || authStatus == 'LOADING' && isSilentRenew) {
    isSilentRenew = true;
    return children;
  }

  var LOGOUT_STATUS = ['USER_SIGNED_OUT', 'USER_EXPIRED'].includes(authStatus);

  if (LOGOUT_STATUS && !loading) {
    if (goingToLogin) return null;
    goingToLogin = true;
    (0, _userManager.goToLogin)();
    return null;
  }

  return null;
}

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    authStatus: state.auth.status,
    loading: state.auth.isLoadingUser
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(AuthGuard);

exports.default = _default;