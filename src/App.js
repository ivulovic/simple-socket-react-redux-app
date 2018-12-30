import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import { browserHistory } from 'react-dom';
import {Menu, GuardRoute, NotFound} from "./components";
import Profile from "./containers/Profile";
import Records from "./containers/Records";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {connect} from "react-redux";
import * as AuthActions from "./store/actions/auth.actions";


class App extends Component {

  componentDidMount(){
    if(localStorage.getItem('fakeUserLoggedIn')){
      this.props.login();
    }
  }

  isLoggedIn(){
    return this.props.auth.loggedIn || localStorage.getItem('fakeUserLoggedIn');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter history={browserHistory}>
            <div>
              <Menu onLogin={this.props.login} loggedIn={this.props.auth.loggedIn}/>
              <Switch>
                <Route exact path="/" component={Records}/>
                 <GuardRoute guard={this.isLoggedIn()} path="/profile" component={Profile}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(AuthActions.login());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

