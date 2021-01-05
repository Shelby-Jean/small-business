import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Login from './components/Login';
import Listings from './containers/Listings';
import Details from './components/Details';
import Add from './components/Add';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />
    }
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/listings' component={Listings} />
      <Route path='/details' component={Details} />
      <ProtectedRoute path='/add' component={Add} />
    </Switch>
  )
}

export default Router;