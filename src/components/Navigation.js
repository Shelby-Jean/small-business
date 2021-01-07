import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar color="primary" position="relative">
      <Toolbar>
        <h3 style={{ flexGrow: "1" }}>Charlotte Small Business</h3>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/listings">Listings</Link>
          </li>
          <li className="nav-item"
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