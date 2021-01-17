import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';

const mapStateToProps = (state) => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(GoogleMap);