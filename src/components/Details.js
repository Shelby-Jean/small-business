import { Container } from '@material-ui/core';

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
      </Container>
    </div>
  )
}

export default Details;