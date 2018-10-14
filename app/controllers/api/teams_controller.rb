class Api::TeamsController < ApplicationController
  before_action :require_login

  def create
    @team = Team.new(team_params)

    if @team.save
      TeamUser.create({team_id: @team.id, user_id: current_user.id})
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def index
    @teams = current_user.teams
    render "api/teams/index"
  end

  def show
    @team = Team.find(params[:id])
    render "api/teams/show"
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render "api/teams/show"
  end

  private

  def team_params
    params.require(:team).permit(:team_name)
  end
end
