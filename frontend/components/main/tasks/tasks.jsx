import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      newTaskName: ""
    }
    // this.filteredTasks = this.filteredTasks.bind(this);
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
    const task = {task_name: `${this.state.newTaskName}`, user_id: this.props.currentUser.id, team_id: this.props.currentTeam.id};
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
    let allTasks = Object.values(this.props.tasks)
    return(
      <ul className="all-tasks-ul"> All the Tasks
        {allTasks.map((task, i) => (
          <li key={`task${i}`}>
            <input
            type="checkbox"
            checked={task.complete}
            onChange={this.updateStatus(task.id, 'complete')}>
            </input>
              <input
                type="text"
                value={task.task_name}
                onChange={this.update(task.id, 'task_name')}
                onKeyDown={this.handleKeyDown(task.id)}>
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

  render() {
    return (
      <div>All the tasks!!!!
        {this.renderTasks()}
      </div>
    );
  }
}

export default withRouter(Tasks)
