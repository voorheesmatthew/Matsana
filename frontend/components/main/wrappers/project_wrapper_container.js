/*jshint esversion: 6 */
import { connect } from 'react-redux';

import ProjectWrapper from './project_wrapper';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.userId]
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectWrapper);
