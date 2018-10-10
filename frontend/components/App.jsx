import React from 'react';
import { Route } from 'react-router-dom'

import TopBarContainer from './top_bar/top_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header className="header">
      <h1 className="title">Matsana</h1>
      <TopBarContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
