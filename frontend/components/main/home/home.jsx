import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {



  renderProjects() {
    // debugger;
    let projects = Object.values(this.props.projects)
    return(
      <ul className="home-projects-ul"> Projects
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
      <div className="home-outer">Your home page
        {this.props.newProjectButton}
      </div>
    );
  }
}

export default withRouter(HomePage)
