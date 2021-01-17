import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
 
class GoogleMap extends React.Component {
  render() {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={{lat: this.props.latt, lng: this.props.long}}
        defaultZoom={11}
      >
        <Marker
          lat={this.props.latt}
          lng={this.props.long}
        />
      </GoogleMapReact>
    </div>
  );
}
}
 
export default GoogleMap;