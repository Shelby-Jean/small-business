import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import GoogleMap from '../components/GoogleMap';

const Details = (props) => {
  const id = props.match.params.id;
  const filteredListing = props.listings.find(listing => listing.id.toString() === id);

  const [latt, setLatt] = useState(35.227200);
  const [long, setLong] = useState(-80.846100);

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${filteredListing.address}&key=${process.env.REACT_APP_MAP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setLatt(data.results[0].geometry.location.lat);
        setLong(data.results[0].geometry.location.lng);
      })
      .catch(error => {
        console.log(error);
      })
  });

  return (
    <div>
      <Container maxWidth="xs">
        <h2>{filteredListing.name}</h2>
        <h4>{filteredListing.address}</h4>
        <h4>{filteredListing.hours}</h4>
        <p>{filteredListing.description}</p>
        <GoogleMap latt={latt} long={long} listingName={filteredListing.name} />
      </Container>
    </div>
  )
}

export default Details;