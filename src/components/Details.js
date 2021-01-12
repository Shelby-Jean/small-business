import { Container } from '@material-ui/core';
import GoogleMap from './GoogleMap';

const Details = (props) => {
  const id = props.match.params.id;
  const filteredListing = props.listings.find(listing => listing.id == id);

  return (
    <div>
      <Container maxWidth="xs">
        <h2>{filteredListing.name}</h2>
        <h4>{filteredListing.address}</h4>
        <h4>{filteredListing.hours}</h4>
        <p>{filteredListing.description}</p>
        <GoogleMap />
      </Container>
    </div>
  )
}

export default Details;