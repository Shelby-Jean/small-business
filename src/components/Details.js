import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import GoogleMap from '../components/GoogleMap';

const Details = (props) => {
  const id = props.match.params.id;
  const filteredListing = props.listings.find(listing => listing.id == id);

  const [lat, setLat] = useState(35.227200);
  const [lng, setLng] = useState(-80.846100);
  //useState with lat and lng, set with response

  //convert address to coordinates
  //useEffect to make async call to GM API with address

  return (
    <div>
      <Container maxWidth="xs">
        <h2>{filteredListing.name}</h2>
        <h4>{filteredListing.address}</h4>
        <h4>{filteredListing.hours}</h4>
        <p>{filteredListing.description}</p>
        <GoogleMap lat={lat} lng={lng} />
      </Container>
    </div>
  )
}

export default Details;