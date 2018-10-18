import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  renderProjects() {
    // debugger;
    let projects = Object.values(this.props.projects)
    // debugger
    return(
      <ul className="nav-projects-ul"> Projects
        {projects.map((project, i) => (
          <li key={`project${i}`}>
            <Link to={`/${project.id}`}>
              {project.project_name}
            </Link>
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
            <div>{this.props.tasksLink}</div>
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
