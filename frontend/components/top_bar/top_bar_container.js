/*jshint esversion: 6 */
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import TopBar from './top_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
