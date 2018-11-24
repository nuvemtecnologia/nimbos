import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { userManager } from './user-manager';

export function Callback({ loginMessage, redirect }) {
  return (
    <CallbackComponent
      userManager={userManager.current}
      successCallback={response => {
        let redirectUri = '/';

        if (response && 'state' in response && 'redirectUri' in response.state) {
          redirectUri = response.state.redirectUri;
        }

        redirect(redirectUri);
      }}
      errorCallback={error => {
        redirect('/error');
      }}
    >
      <div>{loginMessage ? loginMessage : 'Entrando...'}</div>
    </CallbackComponent>
  );
}

export default Callback;
