import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './styles.module.css';
import Main from '../Main';
import Welcome from '../Welcome';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SignUp from '../SignUp';
import Login from '../Login';
import Logout from '../Logout';
import NotFound from '../NotFound';
import AwsHome from '../AwsHome/'
import userService from '../services/user-service';


function render(title, Cmp, otherProps) {
  return function (props) {
    return <Main title={title} ><Cmp {...props} {...otherProps} /></Main>
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
};

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['sessionid'];
    this.state = { isLogged };
  }

  login = (history, data) => {
    userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  render() {
    const { isLogged } = this.state;

    return (
      <Router>
        <Navigation isLogged={isLogged} />
        <Switch>
          <Route path='/' exact render={render('Welcome to', Welcome, {isLogged})} />
          <Route path='/account/login' render={render('Login', Login, { isLogged, login: this.login })} />
          {isLogged && <Route path="/account/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />}
          <Route path='/account/signup' render={render('Sign Up', SignUp)} />
          <Route path='/aws/home' render={render('AWS', AwsHome)} />

          {/*404 Page Not Found. Keep always last*/}
          <Route render={render('Page Not Found!', NotFound)} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;