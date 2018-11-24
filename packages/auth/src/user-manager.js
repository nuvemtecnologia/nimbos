import { WebStorageStateStore } from 'oidc-client';
export function goToLogin() {
  const location = window.location;

  let redirectUri = location.pathname;
  if (location.search) {
    redirectUri += location.search;
  }
  if (location.hash) {
    redirectUri += location.hash;
  }
  userManager.current.signinRedirect({
    data: {
      redirectUri
    }
  });
}

export const config = {
  current: {
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
  }
};

export const userManager = { current: null };
