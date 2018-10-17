/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { requestTeams } from '../../../actions/team_actions';
import { requestTasks } from '../../../actions/task_actions';
import { requestProjects } from '../../../actions/project_actions';

import ProjectWrapper from './project_wrapper';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTeams: (currentUser) => dispatch(requestTeams(currentUser)),
  fetchTasks: (currentUserId, currentTeamId) => dispatch(requestTasks(currentUserId, currentTeamId)),
  fetchProjects: (currentTeamId) => dispatch(requestProjects(currentTeamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectWrapper);
