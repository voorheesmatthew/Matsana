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
    this.updateStatus = this.updateStatus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }



  update(taskId, field) {
    return e => {
      let task = {id: taskId, [field]: e.currentTarget.value}
      this.props.updateTask(task);
    }
  }

  updateStatus(taskId, field) {
    return e => {
      let task = {id: taskId, complete: e.currentTarget.checked}
      this.props.updateTask(task);
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

  handleKeyDown(taskId) {
    return e => {
      if (e.key === "Backspace" && e.currentTarget.value.length === 0) {
        this.props.deleteTask(taskId)
      }
    };
  }

  renderTasks() {
    let filtasks = this.filteredTasks()
    return(
      <ul className="proj-tasks-ul"> Tasks
        {filtasks.map((task, i) => (
          <li key={`task${i}`}>
            <input className="checkbox"
            type="checkbox"
            checked={task.complete}
            onChange={this.updateStatus(task.id, 'complete')}>
            </input>
              <input
                className="task-name"
                type="text"
                value={task.task_name}
                onChange={this.update(task.id, 'task_name')}
                onKeyDown={this.handleKeyDown(task.id)}>
              </input>
          </li>
        ))}
        <li>
          <form className="new-task-form" onSubmit={this.handleSubmit}>
            <input
              className="new-task-input"
              placeholder="New Task"
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
      <div className="proj-tasks-outer">
        <div className="proj-tasks-container">
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

export default withRouter(Project)

// props.projects[parseInt(this.props.match.params.project)].project_name
