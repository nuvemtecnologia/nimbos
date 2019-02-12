"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToLogin = goToLogin;
exports.userManager = exports.config = void 0;

var _oidcClient = require("oidc-client");

function goToLogin() {
  var location = window.location;
  var redirectUri = location.pathname;

  if (location.search) {
    redirectUri += location.search;
  }

  if (location.hash) {
    redirectUri += location.hash;
  }

  userManager.current.signinRedirect({
    data: {
      redirectUri: redirectUri
    }
  });
}

var config = {
  current: {
    client_id: 'NONE',
    redirect_uri: "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":".concat(window.location.port) : '', "/callback"),
    response_type: 'token id_token',
    scope: 'openid profile',
    authority: 'NONE',
    silent_redirect_uri: "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":".concat(window.location.port) : '', "/silent_renew.html"),
    post_logout_redirect_uri: "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ":".concat(window.location.port) : '', "/"),
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true,
    userStore: new _oidcClient.WebStorageStateStore({
      store: window.localStorage
    }),
    revokeAccessTokenOnSignout: true,
    includeIdTokenInSilentRenew: true,
    popup_redirect_uri: ''
  }
};
exports.config = config;
var userManager = {
  current: null
};
exports.userManager = userManager;