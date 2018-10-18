import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project,
      task_name: ""
    }
    this.filteredTasks = this.filteredTasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.project || this.state.project.id != parseInt(newProps.match.params.project)) {
      this.setState({
        project: newProps.project
      })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.props.processForm(task)
  }

  renderTasks() {
    let filtasks = this.filteredTasks()
    return(
      <ul className="proj-tasks-ul"> Tasks
        {filtasks.map((task, i) => (
          <li key={`task${i}`}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={task.task_name}
                onChange={this.update('task_name')}>
              </input>
            </form>
          </li>
        ))}
      </ul>
    );
  }

  filteredTasks() {
    return Object.values(this.props.tasks).filter(task =>
      task.project_id === parseInt(this.props.match.params.project)
    );
  }

  render() {
    if (!this.state.project) {
      return null;
    }
    return (
      <div>The project {this.state.project.project_name} tasks will go here!
        {this.renderTasks()}
      </div>
    );
  }
}

export default withRouter(Project)

// props.projects[parseInt(this.props.match.params.project)].project_name
