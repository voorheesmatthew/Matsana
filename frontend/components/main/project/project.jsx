import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.projects[parseInt(this.props.match.params.project)]
    }
    this.filterTasks = this.filterTasks.bind(this);
  }

  componentWillMount() {
    // debugger
  }

  renderTasks() {
    // let tasks = Object.values(this.filterTasks(this.state.project))
    // return(
    //   <ul className="proj-tasks-ul"> Tasks
    //     {tasks.map((task, i) => (
    //       <li key={`task${i}`}>
    //           {task.task_name}
    //       </li>
    //     ))}
    //   </ul>
    // );
  }

  filterTasks(project) {
    // debugger
  }

  render() {
    return (
      <div>Tasks will go here
        {this.renderTasks()}
      </div>
    );
  }
}

export default withRouter(Project)
