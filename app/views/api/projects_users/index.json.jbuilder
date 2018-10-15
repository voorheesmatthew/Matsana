@projects_users.each do |project_user|
  json.set! project_user.id do
    json.extract! project_user, :project_id, :user_id
  end
end
