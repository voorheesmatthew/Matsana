import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import NavBarContainer from './bars/nav_bar_container';
import TopBarContainer from './bars/top_bar_container';
import HomeContainer from './home/home_container';
import ProjectContainer from './project/project_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTeams(this.props.currentUser)
  }

  render() {
    return (
      <div className="main-outer">
        <div id="left" className="column">
          <NavBarContainer/>
        </div>
        <div id="right" className="column">
          <TopBarContainer/>
          <Switch>
            <ProtectedRoute exact path="/home" component={HomeContainer}/>
            <ProtectedRoute path="/:projectId" component={ProjectContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}


export default withRouter(MainPage);
