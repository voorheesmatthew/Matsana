import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      newTaskName: ""
    }
    this.filteredTasks = this.filteredTasks.bind(this);
    this.updateCreate = this.updateCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }



  update(taskId, field) {
    return e => {
      let task = {id: taskId, [field]: e.currentTarget.value}
      if (task.task_name && task.task_name.length === 0) {
        this.props.deleteTask(task.id)
      } else {
        this.props.updateTask(task);
      }
    }
  }

  updateCreate() {
    return e => {
      this.setState({
        newTaskName: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {task_name: `${this.state.newTaskName}`, user_id: this.props.currentUser.id, project_id: this.props.project.id, team_id: this.props.currentTeam.id};
    this.props.createTask(task).then(this.setState({
      newTaskName: ""
    }))
  }

  renderTasks() {
    let filtasks = this.filteredTasks()
    return(
      <ul className="proj-tasks-ul"> Tasks
        {filtasks.map((task, i) => (
          <li key={`task${i}`}>
            <input
            type="checkbox"
            checked={task.complete}
            onChange={task.id, this.update(task.id, 'complete')}>
            </input>
              <input
                type="text"
                value={task.task_name}
                onChange={this.update(task.id, 'task_name')}>
              </input>
          </li>
        ))}
        <li>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newTaskName}
              onChange={this.updateCreate()}>
            </input>
          </form>
        </li>

      </ul>
    );
  }


  filteredTasks() {
    return Object.values(this.props.tasks).filter(task =>
      task.project_id === parseInt(this.props.match.params.project)
    );
  }

  render() {
    if (!this.props.project) {
      return null;
    }
    return (
      <div>The project {this.props.project.project_name} tasks will go here!
        {this.renderTasks()}
      </div>
    );
  }
}

export default withRouter(Project)

// props.projects[parseInt(this.props.match.params.project)].project_name
