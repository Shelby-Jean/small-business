import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn, logOut } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);