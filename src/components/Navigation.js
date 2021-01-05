import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6">Charlotte Small Business</Typography>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/listings">Listings</Link>
          </li>
          <li className="nav-list-item"
              onClick={() => {
                document.cookie = "loggedIn="
                window.location.replace("/login")
              }}>
              Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation;