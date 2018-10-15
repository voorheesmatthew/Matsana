class Api::TeamsUsersController < ApplicationController
  before_action :require_login
  def create
    @team_user = TeamUser.new(team_user_params)

    if @team_user.save
      render "api/teams_users/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team_user = TeamUser.find(params[:id])
    render "api/teams_users/show"
  end

  def destroy
    @team_user = TeamUser.find(params[:id])
    @team_user.destroy
    render "api/teams_users/show"
  end

  private

  def team_user_params
    params.require(:team_user).permit(:team_id, :user_id)
  end

end
