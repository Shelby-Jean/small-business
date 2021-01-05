import { Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';

const Listings = () => {
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
        </Table>
      </Container>
    </div>
  )
}

export default Listings;