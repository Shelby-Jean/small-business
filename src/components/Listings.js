import { Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Listings = (props) => {
  return (
    <div>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map(business => (
              <TableRow key={business.id}>
                <TableCell>
                  <Link to={`/details/${business.id}`}>{business.name}</Link>
                </TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.hours}</TableCell>
                <TableCell>{business.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  )
}

export default Listings;