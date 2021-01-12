import { Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Listings = (props) => {
  const useStyles = makeStyles({
    tableheader: {
      fontSize: "12px", 
      color: "grey", 
      fontWeight: "bold"    
    }
  });

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className="listings-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableheader}>Name</TableCell>
              <TableCell className={classes.tableheader}>Description</TableCell>
              <TableCell className={classes.tableheader}>Hours</TableCell>
              <TableCell className={classes.tableheader}>Address</TableCell>
              {props.isLoggedIn ? 
                  <TableCell className={classes.tableheader}>Delete</TableCell>
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
                  <TableCell><Delete onClick={() => props.removeListing(listing.id)} style={{ color: pink[500] }} /></TableCell>
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