import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';

import NavBarContainer from '../bars/nav_bar_container';
import TopBarContainer from '../bars/top_bar_container';
import ProjectContainer from '../project/project_container';

class ProjectWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // this.props.fetchTeams(this.props.currentUser)
  }

  render() {
    return (
      <div className="main-outer">
        <div id="left" className="column">
          <NavBarContainer/>
        </div>
        <div id="right" className="column">
          <TopBarContainer/>
          <ProjectContainer/>
        </div>
      </div>
    );
  }
}


export default withRouter(ProjectWrapper);
