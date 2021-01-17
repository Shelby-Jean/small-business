import React from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends React.Component {
  render() {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={{lat: this.props.latt, lng: this.props.long}}
        defaultZoom={13}
      >
        <AnyReactComponent
          lat={this.props.latt}
          lng={this.props.long}
          text="!"
        />
      </GoogleMapReact>
    </div>
  );
}
}
 
export default GoogleMap;