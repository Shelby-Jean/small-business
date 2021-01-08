import { connect } from 'react-redux';
import Login from '../components/Login';
import { logIn, logOut, setUser } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);