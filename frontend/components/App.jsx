import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'

import SplashPage from './splash_page/splash_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainPage from './main/main'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="app-outer">
    <Switch>
      <AuthRoute exact path="/" component={SplashPage}/>
      <ProtectedRoute exact path="/main" component={MainPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;
