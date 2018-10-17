@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :task_name, :due_date, :complete, :team_id, :user_id, :project_id
  end
end
