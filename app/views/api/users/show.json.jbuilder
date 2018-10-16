json.user do
  json.partial! "api/users/user", user: @user
end
if @team
  json.team do
    json.partial! "api/teams/team", team: @team
  end
end
