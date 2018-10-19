import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

class NavBar extends React.Component {

  renderProjects() {
    // debugger;
    let projects = Object.values(this.props.projects)
    // debugger
    return(
      <ul className="nav-projects-ul"><div>Projects</div>
        {projects.map((project, i) => (
          <li key={`project${i}`}>
            <Link to={`/${project.id}`}
              className={parseInt(this.props.match.params.project) === project.id ? "proj-selected" : null }>
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
            <img src="https://png2.kisspng.com/show/bcb99e446a6f163415ea40150695106e/L0KzQYm3U8IxN6dmfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfhwdZYyiNNwZT3pccfwgB9vNahqeuVydHWwh7bpkBl1bV5ritduLXbsfLb6TcViamI7TqdsNEe5RoSBTsExOWc4TKsDMUW1QYaAVcUyPmMASqc3cH7q/kisspng-computer-icons-home-page-favicon-website-website-free-files-5ab1665c476638.1016349815215755162925.png" className="home-icon"></img>
            <div>{this.props.homeLink}</div>
            <img src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-light-gray/raphael/raphael_check-mark/raphael_check-mark_flat-circle-white-on-light-gray_512x512.png" className="task-icon"></img>
            <div>{this.props.tasksLink}</div>
          </div>
          <div className="nav-projects">
            {this.renderProjects()}
          </div>
        </div>
        <div className="nav-footer">
            <a href="https://www.linkedin.com/in/voorheesmatthew/">
          <img src="https://png.icons8.com/ios/50/ffffff/linkedin.png"></img></a>
            <a href="https://github.com/voorheesmatthew"><img src="https://png.icons8.com/ios/50/ffffff/github.png"></img></a>
            <a href="https://twitter.com/matographer"><img src="https://png.icons8.com/ios/50/ffffff/twitter-circled.png"></img></a>
        </div>
      </div>
    );
  }




}

export default withRouter(NavBar);
