import { connect } from 'react-redux';

let alreadyInitialized = false;

function AuthGuard({ user, children }) {
  if (user || alreadyInitialized) {
    alreadyInitialized = true;
    return children;
  }

  return null;
}

const mapStateToProps = (state, props) => ({
  user: state.oidc.user,
  loading: state.oidc.isLoadingUser
});

export default connect(
  mapStateToProps,
  null
)(AuthGuard);
