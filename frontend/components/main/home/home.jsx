import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.assignColor = this.assignColor.bind(this);
  }

  assignColor() {
    const colors = ['#e362e3', '#ea4e9d', '#7a6ff0', '#4186e0', '#aa62e3']
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    return {backgroundColor: `${randColor}`};
  }

  renderProjects() {
    // debugger;
    let projects = Object.values(this.props.projects)
    return(
      <ul className="home-projects-ul">
        {projects.map((project, i) => (
          <li key={`project${i}`} style={this.assignColor()}>

              <Link to={`/${project.id}`}>
                {project.project_name}
              </Link>

          </li>
        ))}
        <li>{this.props.newProjectButton}</li>
      </ul>
    );
  }

  render() {
    return (
      <div className="home-outer">
        <div className="home-projects">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage)
