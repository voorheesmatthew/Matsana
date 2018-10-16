/*jshint esversion: 6 */
import { connect } from 'react-redux';

import { logout, requestCurrentTeam } from '../../../actions/session_actions';
import { requestTeams } from '../../../actions/team_actions';
import TopBar from './top_bar';

const mapStateToProps = ({ session, entities: { users, teams } }) => {
  return {
    currentUser: users[session.userId],
    currentTeamId: session.currentTeamId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTeams: (currentUser) => dispatch(requestTeams(currentUser)),
  logout: () => dispatch(logout()),
  fetchCurrentTeam: (currentTeamId) => dispatch(requestCurrentTeam(currentTeamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
