import { connect } from 'react-redux';
import Add from '../components/Add';
import { addListing } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);