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
  state = {
    userManager: userManager.current
  };

  render() {
    const { children, store } = this.props;

    if (!this.state.userManager) return children;

    return (
      <OidcProvider store={store} userManager={this.state.userManager}>
        <AuthGuard>{children}</AuthGuard>
      </OidcProvider>
    );
  }
}
