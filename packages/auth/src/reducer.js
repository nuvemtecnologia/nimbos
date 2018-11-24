import {
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  SESSION_TERMINATED,
  LOADING_USER,
  USER_SIGNED_OUT
} from 'redux-oidc';

import { reducer as oidc } from 'redux-oidc';

export function reducer(state, action) {
  const { type } = action;

  var state = oidc(state, action);

  switch (type) {
    case LOADING_USER:
      // the loading process of a new user starts
      return { ...state, status: 'LOADING' };

    case USER_EXPIRED:
      // current user is expired

      return { ...state, status: 'USER_EXPIRED' };

    case REDIRECT_SUCCESS:
      // redirection callback succeeded in CallbackComponent.
      return { ...state, status: 'USER_LOADED' };

    case USER_FOUND:
      // an existing user has been found during startup of the middleware.

      return { ...state, status: 'USER_LOADED' };

    case SILENT_RENEW_ERROR:
      // silent renew fails.
      return { ...state, status: 'SILENT_RENEW_ERROR' };

    case SESSION_TERMINATED:
      // the current session is terminated (user is logged out).
      return { ...state, status: 'SESSION_TERMINATED' };

    case USER_SIGNED_OUT:
      // the user signs out.
      return { ...state, status: 'USER_SIGNED_OUT' };
    case '@@INIT':
      return { ...state, status: 'INIT' };
    default:
      return state;
  }
}
