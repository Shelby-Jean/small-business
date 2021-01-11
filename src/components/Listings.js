import { Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const Listings = (props) => {
  return (
    <div>
      <Container maxWidth="lg" className="listings-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "12px", color: "grey", fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontSize: "12px", color: "grey", fontWeight: "bold" }}>Description</TableCell>
              <TableCell style={{ fontSize: "12px", color: "grey", fontWeight: "bold" }}>Hours</TableCell>
              <TableCell style={{ fontSize: "12px", color: "grey", fontWeight: "bold" }}>Address</TableCell>
              {props.isLoggedIn ? 
                  <TableCell>Delete</TableCell>
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listings.map(listing => (
              <TableRow key={listing.id}>
                <TableCell style={{ textDecoration: "underline" }}>
                  <Link to={`/details/${listing.id}`}>{listing.name}</Link>
                </TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>{listing.address}</TableCell>
                {props.isLoggedIn ? 
                  <TableCell><Delete style={{ color: pink[500] }} /></TableCell>
                : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  )
}

export default Listings;