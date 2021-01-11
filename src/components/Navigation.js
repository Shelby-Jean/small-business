import UserBanner from '../containers/UserBanner';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  const logInOut = () => {
    window.location.replace("/login");
    if(props.isLoggedIn){
      document.cookie = "loggedIn=";
    }
  }

  return (
    <div>
      <AppBar color="primary" position="relative">
        <Toolbar color="contrastText">
          <h3 style={{ flexGrow: "1" }}>Charlotte Small Business</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/listings">Listings</Link>
            </li>
            {props.isLoggedIn ? 
              <li className="nav-item">
                <Link to="/add">Add</Link>
              </li>
              : null
            }
            <li className="nav-item" onClick={logInOut}>{props.isLoggedIn ? "Logout" : "Login"}</li>
          </ul>
        </Toolbar>
      </AppBar>
      {props.isLoggedIn ? <UserBanner /> : null}
    </div>
  )
}

export default Navigation;