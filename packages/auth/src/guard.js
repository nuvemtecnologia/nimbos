import { connect } from 'react-redux';
import { goToLogin } from './user-manager';

let goingToLogin = false;
let isSilentRenew = false;

function AuthGuard({ authStatus, children, loading }) {
  if (authStatus == 'USER_LOADED' || (authStatus == 'LOADING' && isSilentRenew)) {
    isSilentRenew = true;
    return children;
  }

  const LOGOUT_STATUS = ['USER_SIGNED_OUT', 'USER_EXPIRED'].includes(authStatus);

  if (LOGOUT_STATUS && !loading) {
    if (goingToLogin) return null;
    goingToLogin = true;
    goToLogin();
    return null;
  }

  return null;
}

const mapStateToProps = (state, props) => ({
  authStatus: state.auth.status,
  loading: state.auth.isLoadingUser
});

export default connect(
  mapStateToProps,
  null
)(AuthGuard);
