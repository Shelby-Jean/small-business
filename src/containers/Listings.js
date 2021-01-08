import { connect } from 'react-redux';
import Listings from '../components/Listings';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Listings);