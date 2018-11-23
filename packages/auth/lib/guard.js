import { connect } from 'react-redux';
var alreadyInitialized = false;

function AuthGuard(_ref) {
  var user = _ref.user,
      children = _ref.children;

  if (user || alreadyInitialized) {
    alreadyInitialized = true;
    return children;
  }

  return null;
}

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    user: state.oidc.user,
    loading: state.oidc.isLoadingUser
  };
};

export default connect(mapStateToProps, null)(AuthGuard);