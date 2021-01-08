import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
// import {} from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navigation);