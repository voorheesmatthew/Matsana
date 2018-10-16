import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchProjects(this.props.currentTeamId)
  }

  render() {
    return (
      <div className="home-outer">Your home page
        {this.props.newProject}
      </div>
    );
  }
}

export default withRouter(HomePage)
