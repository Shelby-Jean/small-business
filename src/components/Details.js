import { Container } from '@material-ui/core';

const Details = (props) => {
  const id = props.match.params.id;
  const filteredBusiness = props.businesses.find(business => business.id == id);

  return (
    <div>
      <Container maxWidth="xs">
        <h2>{filteredBusiness.name}</h2>
        <h4>{filteredBusiness.address}</h4>
        <h4>{filteredBusiness.hours}</h4>
        <p>{filteredBusiness.description}</p>
      </Container>
    </div>
  )
}

export default Details;