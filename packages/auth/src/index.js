import { createUserManager, OidcProvider, loadUser } from 'redux-oidc';

let _internalUpdateUserManager = () => {};

let _config = {
  client_id: 'NONE',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/callback`,
  response_type: 'token id_token',
  scope: 'openid profile',
  authority: 'NONE',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/silent_renew.html`,
  post_logout_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  revokeAccessTokenOnSignout: true,
  includeIdTokenInSilentRenew: true,
  popup_redirect_uri: ''
};

export const userManager = { current: null };

export function authConfig(config) {
  _config = { ..._config, ...config };
  userManager.current = createUserManager(_config);
  _internalUpdateUserManager(userManager);
}

export class AuthProvider extends React.PureComponent {
  state = {
    userManager: userManager.current
  };

  componentDidMount() {
    _internalUpdateUserManager = userManager => {
      this.setState({ userManager });
      loadUser(this.props.store, userManager);
    };

    if (this.state.userManager) {
      loadUser(this.props.store, userManager);
    }
  }

  render() {
    const { children, store } = this.props;

    if (!this.state.userManager) return children;

    return (
      <OidcProvider store={store} userManager={this.state.userManager}>
        {children}
      </OidcProvider>
    );
  }
}
