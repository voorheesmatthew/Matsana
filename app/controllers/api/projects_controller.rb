class Api::ProjectsController < ApplicationController
  before_action :require_login

  def create
    @project = Project.new(project_params)

    if @project.save
      ProjectUser.create({user_id: current_user.id, project_id: @project.id})
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = Team.find(params[:team_id]).projects
    render "api/projects/index"
  end

  def show
    @project = Project.find(params[:id])
    render "api/projects/show"
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render "api/projects/show"
  end

  private

  def project_params
    params.require(:project).permit(:project_name, :team_id)
  end
end
