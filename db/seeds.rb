User.create!([
  {email: "travis@veryrice.com", name: "Travis Rice", password_digest: "$2a$10$IVOub4NIXwStUMYATeBpdu6Y7Zor6aybUARxL2U3eP/5w2GG1diTG", session_token: "uu_npSaA-xKv9jrL1Kad7Q"}
])

Team.create!([
  {team_name: "My First Team"}
])

TeamUser.create!([
  {team_id: 1, user_id: 1}
])
Project.create!([
  {project_name: "Fullstack Project", team_id: 1},
  {project_name: "Get Hired", team_id: 1},
  {project_name: "Change the world", team_id: 1},
  {project_name: "Reform Education", team_id: 1},
  {project_name: "Build Everything", team_id: 1},
  {project_name: "Learn to backflip", team_id: 1}
])
ProjectUser.create!([
  {project_id: 1, user_id: 1},
  {project_id: 2, user_id: 1},
  {project_id: 3, user_id: 1},
  {project_id: 4, user_id: 1},
  {project_id: 5, user_id: 1},
  {project_id: 6, user_id: 1}
])
Task.create!([
  {task_name: "Tag on Project name to task in tasks View", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Filter tasks", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Round Checkboxes", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Seed Data", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Add style to tasks index file", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Add doodle to splash", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Color bullets for project section", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Build Search", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Full Line Tasks", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 1},
  {task_name: "Go to meetups", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 2},
  {task_name: "Apply to many jobs", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 2},
  {task_name: "Travel", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 3},
  {task_name: "Contribute", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 3},
  {task_name: "Figure it out", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 5},
  {task_name: "Think of it", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 5},
  {task_name: "Find Hospital", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 6},
  {task_name: "Just go for it", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 6},
  {task_name: "Think like a child", due_date: nil, complete: true, team_id: 1, user_id: 1, project_id: 4},
  {task_name: "Live as an educator", due_date: nil, complete: false, team_id: 1, user_id: 1, project_id: 4}
])
