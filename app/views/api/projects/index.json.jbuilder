@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :team_id, :project_name
  end
end
