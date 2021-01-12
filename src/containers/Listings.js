import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { removeListing } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);