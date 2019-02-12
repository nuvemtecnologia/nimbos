import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { userManager } from './user-manager';
export function Callback(_ref) {
  var loginMessage = _ref.loginMessage,
      redirect = _ref.redirect;
  return React.createElement(CallbackComponent, {
    userManager: userManager.current,
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
  }, React.createElement("div", null, loginMessage ? loginMessage : 'Entrando...'));
}
export default Callback;