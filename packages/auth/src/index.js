import React from 'react';
import { createUserManager, OidcProvider, loadUser } from 'redux-oidc';
import { userManager, config as _config } from './user-manager';
import AuthGuard from './guard';
export { reducer } from './reducer';
export * from './callback';

export { userManager };

export function authConfig(store, config) {
  _config.current = { ..._config.current, ...config };
  userManager.current = createUserManager(_config.current);
  loadUser(store, userManager.current);
}

export class AuthProvider extends React.PureComponent {
  render() {
    const { children, store } = this.props;

    return (
      <OidcProvider store={store} userManager={userManager.current}>
        <AuthGuard>{children}</AuthGuard>
      </OidcProvider>
    );
  }
}
