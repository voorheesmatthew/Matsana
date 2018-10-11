import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'

import TopBarContainer from './top_bar/top_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPage from './splash_page/splash_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header className="app-header">
      <TopBarContainer/>
    </header>

    <Switch>
      <AuthRoute exact path="/" component={SplashPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
