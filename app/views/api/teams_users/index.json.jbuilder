@teams_users.each do |team_user|
  json.set! team_user.id do
    json.extract! team_user, :team_id, :user_id
  end
end
