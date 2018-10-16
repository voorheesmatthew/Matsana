/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { requestProjects } from '../../../actions/project_actions';
import HomePage from './home';

const mapStateToProps = ({session, entities: { users, teams }}) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProjects: (currentTeamId) => dispatch(requestProjects(currentTeamId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
