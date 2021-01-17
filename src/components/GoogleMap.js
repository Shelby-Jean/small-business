import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
 
class GoogleMap extends React.Component {
  render() {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={{lat: this.props.latt, lng: this.props.long}}
        defaultZoom={11}
      >
        <LocationPin
          lat={this.props.latt}
          lng={this.props.long}
          text={this.props.listingName}
        />
      </GoogleMapReact>
    </div>
  );
}
}
 
export default GoogleMap;