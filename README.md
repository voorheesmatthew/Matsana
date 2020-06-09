# [Matsana](https://matsana.io)
## Matthew Voorhees First Fullstack Project 2018
### (Asana Clone, built in 10 days)

![Alt Text](https://media.giphy.com/media/IgGEUyl1wfhptgwqe8/source.gif)

## Description
[Matsana](https://matsana.io) is a no-nonsense approach to project management. You can log in with a demo account to take a tour of what it's like in the life of Matt Voorhees, or you can create your own account to manage unlimited projects and tasks associated with those projects. You can get a high-level view of your responsibilities and add tasks free from the restraints of being associated with a project.

### Live Version:
[Matsana](https://matsana.io)

## Technologies

[Matsana](https://matsana.io) was built on Rails using a PostgreSQL database, AJax, Ruby on the backend, and React on the frontend.  A healthy dose of blood, sweat, and tears. CSS3 for styling.

## Key Features

### Live updates and mouseless navigation

Tasks are created, updated, and destroyed without the use of a pesky mouse (Tab, Enter, and Delete are all you need in life and [Matsana](https://matsana.io) Tasks). Tasks are updated in real-time, instantaneously, so there's no need to save your work, really.

```js
  update(taskId, field) {
    return e => {
      let task = {id: taskId, [field]: e.currentTarget.value}
      this.props.updateTask(task);
    }
  }
```
```js
  updateStatus(taskId, field) {
    return e => {
      let task = {id: taskId, complete: e.currentTarget.checked}
      this.props.updateTask(task);
    }
  }
```
```js
  handleKeyDown(taskId) {
    return e => {
      if (e.key === "Backspace" && e.currentTarget.value.length === 0) {
        this.props.deleteTask(taskId)
      }
    };
  }
```
```js
<ul className="proj-tasks-ul">
        {allTasks.map((task, i) => (
          <li key={`task${i}`}>
            <input
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
```

### Add spice to your day with pastel colors

Randomizes the colors of your projects with a beautiful spectrum of calming yet invigorating colors.

```js
assignColor() {
  const colors = ['#e362e3', '#ea4e9d', '#7a6ff0', '#4186e0', '#aa62e3']
  let randColor = colors[Math.floor(Math.random() * colors.length)];
  return {backgroundColor: `${randColor}`};
}

renderProjects() {
  let projects = Object.values(this.props.projects)
  return(
    <ul className="home-projects-ul">
      {projects.map((project, i) => (
        <li key={`project${i}`} style={this.assignColor()}>

            <Link to={`/${project.id}`}>
              {project.project_name}
            </Link>

```


### Empathetic design

The entire interface changes to reflect your workflow, giving you the opportunity to not think about what you're doing, and focus on what needs to get done.
```js
renderProjects() {
  let projects = Object.values(this.props.projects)
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
```

# The End?


### Future project direction sorted by priority:

1. Unicorns fly across the screen as you complete your tasks

2. Custom Checkboxes

3. Add teams feature to help users collaborate with others

4. Use machine learning to complete tasks before you think of them
