import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  renderProjects() {
    // debugger;
    let projects = Object.values(this.props.projects)
    return(
      <ul className="nav-projects-ul"> Projects
        {projects.map((project, i) => (
          <li key={`project${i}`}>
            {project.project_name}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="nav-outer">
        <div className="nav-header">
          matsana
        </div>

        <div className="nav-bar-contents">
          <div className="nav-sections">
            <div>{this.props.homeLink}</div>
            <div>Tasks</div>
          </div>
          <div className="nav-projects">
            {this.renderProjects()}
          </div>
        </div>
        <div className="nav-footer">
          LinkedIn Github Etc
        </div>
      </div>
    );
  }




}

export default withRouter(NavBar);
