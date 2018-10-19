import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'

import Modal from './modal/modal';
import SplashPage from './splash_page/splash_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomeWrapperContainer from './main/wrappers/home_wrapper_container';
import TasksWrapperContainer from './main/wrappers/tasks_wrapper_container';
import ProjectWrapperContainer from './main/wrappers/project_wrapper_container';
import Loading from './main/wrappers/loading';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="app-outer">
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/loading" component={Loading} />
      <ProtectedRoute exact path="/home" component={HomeWrapperContainer}/>
      <ProtectedRoute exact path="/tasks" component={TasksWrapperContainer}/>
      <ProtectedRoute exact path="/:project" component={ProjectWrapperContainer}/>

      <Redirect to="/login"/>
    </Switch>
  </div>
);

export default App;
