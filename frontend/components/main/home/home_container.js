/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { requestTeams } from '../../../actions/team_actions';
import HomePage from './home';

const mapStateToProps = ({session, entities: { users, teams }}) => {
  return {
    currentUser: users[session.userId],
    currentTeam: teams[session.currentTeamId]
  };
};

const mapDispatchToProps = dispatch => ({
  
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
