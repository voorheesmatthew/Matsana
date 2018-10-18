import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';

import NavBarContainer from '../bars/nav_bar_container';
import TopBarContainer from '../bars/top_bar_container';
import TasksContainer from '../tasks/tasks_container';

class TasksWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // debugger
    this.props.fetchTeams(this.props.currentUser),
    this.props.fetchTasks(this.props.currentUser.id, this.props.currentTeamId),
    this.props.fetchProjects(this.props.currentTeamId)
  }

  render() {
    return (
      <div className="main-outer">
        <div id="left" className="column">
          <NavBarContainer/>
        </div>
        <div id="right" className="column">
          <TopBarContainer/>
          <TasksContainer/>
        </div>
      </div>
    );
  }
}


export default withRouter(TasksWrapper);
