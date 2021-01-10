import { connect } from 'react-redux';
import UserBanner from '../components/UserBanner';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserBanner);