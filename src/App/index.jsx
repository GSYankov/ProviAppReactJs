import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styles from './styles.module.css';
import Main from '../Main';
import Welcome from '../Welcome';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SignUp from '../SignUp';
// import Contacts from '../Contacts';
import Login from '../Login';
import Logout from '../Logout';
import NotFound from '../NotFound';
import AwsHome from '../AwsHome/'
import SelectOrg from '../AwsHome/Apps/SelectOrg'
import Create from '../AwsHome/Apps/Create'
import userService from '../services/user-service';
import postService from '../services/post-service';


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
    this.state = { cookies };
    this.state = { isLogged };
  }

  componentWillMount(){
    this.setState({cookies: parseCookeis()})
  }

  getCsrf = (url) => {
    postService.obtainCsrf(url).then(() => this.setState({ cookies: parseCookeis() }));
  };

  login = (history, data) => {
    let csrf = this.state.cookies['csrftoken'];
    userService.login(data, csrf).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }

  logout = (csrf, history) => {
    userService.logout(csrf).then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  render() {
    const { cookies } = this.state;
    const { isLogged } = this.state;

    return (
      <Router>
        <Navigation isLogged={isLogged} />
        <Switch>
          <Route path='/' exact render={render('Welcome to', Welcome, { isLogged })} />
          <Route path='/account/login' render={render('Login', Login, { isLogged, login: this.login, getCsrf: this.getCsrf, cookies })} />
          {/* {isLogged && <Route path="/account/logout" render={render('Logout', Logout, { isLogged, logout: this.logout, cookies })} />} */}
          <Route path="/account/logout" render={isLogged ? render('Logout', Logout, { isLogged, logout: this.logout, cookies}) : () => <Redirect to="/" />} />
          <Route path='/account/signup' render={render('Sign Up', SignUp)} />
          {/* <Route path='/contacts' render={render('Contacts', Contacts)} /> */}
          
          <Route path='/aws/home' render={isLogged ? render('AWS', AwsHome) : () => <Redirect to="/" /> } />
          <Route path='/aws/select-organization' exact render={isLogged ? render('Select Organization', SelectOrg) : () => <Redirect to="/" />} />
          <Route path='/aws/new/:org' exact render={isLogged ? render('Create application', Create, { isLogged, getCsrf: this.getCsrf, cookies }): () => <Redirect to="/" />} /> />
          {/* {isLogged && <Route path='/aws/home' render={render('AWS', AwsHome)} />}
          {isLogged && <Route path='/aws/select-organization' exact render={render('Select Organization', SelectOrg)} />}
          {isLogged && <Route path='/aws/new/:org' exact render={render('Create application', Create, { isLogged, getCsrf: this.getCsrf, cookies })} />} */}

          {/*404 Page Not Found. Keep always last*/}
          <Route render={render('Page Not Found!', NotFound)} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;